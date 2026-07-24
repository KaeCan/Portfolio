import type { AstroIntegration } from 'astro';
import type { MutationEvent } from '@sanity/client';
import { createSanityClient } from '../loaders/sanity-loader';

const LISTEN_QUERY = '*[!(_id in path("drafts.**"))]';

const DEBOUNCE_MS = 300;

function isPublishedDocumentMutation(
    event: MutationEvent
): event is MutationEvent & { documentId: string } {
    return (
        typeof event.documentId === 'string' &&
        !event.documentId.startsWith('drafts.')
    );
}

export function sanityPublishRefresh(): AstroIntegration {
    let subscription: { unsubscribe: () => void } | undefined;
    let debounceTimer: ReturnType<typeof setTimeout> | undefined;

    return {
        name: 'sanity-publish-refresh',
        hooks: {
            'astro:server:setup': ({ refreshContent, logger }): void => {
                if (!refreshContent) {
                    return;
                }

                const client = createSanityClient();

                const scheduleRefresh = (documentId: string): void => {
                    if (debounceTimer) {
                        clearTimeout(debounceTimer);
                    }

                    debounceTimer = setTimeout((): void => {
                        logger.info(
                            `Sanity publish detected (${documentId}); refreshing content`
                        );
                        void refreshContent({
                            loaders: ['sanity-loader'],
                        }).catch((error: unknown) => {
                            logger.error(
                                `Failed to refresh Sanity content: ${String(error)}`
                            );
                        });
                    }, DEBOUNCE_MS);
                };

                subscription = client
                    .listen(
                        LISTEN_QUERY,
                        {},
                        {
                            events: ['mutation'],
                            visibility: 'query',
                            includeResult: false,
                            includeMutations: false,
                            tag: 'astro-dev-publish-refresh',
                        }
                    )
                    .subscribe({
                        next: (event): void => {
                            if (!isPublishedDocumentMutation(event)) {
                                return;
                            }
                            scheduleRefresh(event.documentId);
                        },
                        error: (error: unknown): void => {
                            logger.error(
                                `Sanity publish listener error: ${String(error)}`
                            );
                        },
                    });

                logger.info('Listening for Sanity publishes');
            },
            'astro:server:done': (): void => {
                if (debounceTimer) {
                    clearTimeout(debounceTimer);
                }
                subscription?.unsubscribe();
                subscription = undefined;
            },
        },
    };
}

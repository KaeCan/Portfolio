import { createClient, type SanityClient } from '@sanity/client';
import type { Loader, LoaderContext } from 'astro/loaders';

export interface SanityLoaderOptions {
    query: string;
}

function requireEnv(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing ${name}`);
    }
    return value;
}

export function createSanityClient(): SanityClient {
    return createClient({
        projectId: requireEnv('SANITY_PROJECT_ID'),
        dataset: requireEnv('SANITY_DATASET'),
        token: requireEnv('SANITY_API_READ_TOKEN'),
        apiVersion: '2025-01-01',
        useCdn: false,
    });
}

export function sanityLoader(options: SanityLoaderOptions): Loader {
    const { query } = options;

    return {
        name: 'sanity-loader',
        load: async ({
            store,
            parseData,
            generateDigest,
            logger,
        }: LoaderContext): Promise<void> => {
            const client = createSanityClient();
            logger.info(`Fetching Sanity content: ${query}`);

            const docs = await client.fetch<Record<string, unknown>[]>(query);

            if (!Array.isArray(docs)) {
                throw new Error(
                    `Sanity query must return an array. Got: ${typeof docs}`
                );
            }

            store.clear();

            for (const doc of docs) {
                const id = doc.id;
                if (typeof id !== 'string' || id.length === 0) {
                    throw new Error(
                        `Sanity document missing string "id" field: ${JSON.stringify(doc)}`
                    );
                }

                const data = await parseData({ id, data: doc });
                store.set({
                    id,
                    data,
                    digest: generateDigest(data),
                });
            }

            logger.info(
                `Loaded ${docs.length} Sanity entr${docs.length === 1 ? 'y' : 'ies'}`
            );
        },
    };
}

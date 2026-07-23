import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { requireEnv } from './env';
import { schemaTypes } from './schemaTypes';

const singletonTypes = new Set(['site']);
const singletonActions = new Set(['publish', 'discardChanges', 'restore']);

export default defineConfig({
    name: 'portfolio',
    title: 'Portfolio CMS',
    projectId: requireEnv('SANITY_STUDIO_PROJECT_ID'),
    dataset: requireEnv('SANITY_STUDIO_DATASET'),
    plugins: [
        structureTool({
            structure: (S) =>
                S.list()
                    .title('Content')
                    .items([
                        S.listItem()
                            .id('siteSettings')
                            .schemaType('site')
                            .title('Site settings')
                            .child(
                                S.editor()
                                    .id('siteSettings')
                                    .schemaType('site')
                                    .documentId('site')
                            ),
                        S.divider(),
                        S.documentTypeListItem('experience').title(
                            'Experience'
                        ),
                        S.documentTypeListItem('project').title('Project'),
                    ]),
        }),
        visionTool(),
    ],
    schema: {
        types: schemaTypes,
        templates: (templates) =>
            templates.filter(
                ({ schemaType }) => !singletonTypes.has(schemaType)
            ),
    },
    document: {
        actions: (input, context) =>
            singletonTypes.has(context.schemaType)
                ? input.filter(
                      ({ action }) => action && singletonActions.has(action)
                  )
                : input,
    },
});

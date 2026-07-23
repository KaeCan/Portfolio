import { defineCliConfig } from 'sanity/cli';
import { requireEnv } from './env';

export default defineCliConfig({
    api: {
        projectId: requireEnv('SANITY_STUDIO_PROJECT_ID'),
        dataset: requireEnv('SANITY_STUDIO_DATASET'),
    },
});

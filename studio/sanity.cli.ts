import { defineCliConfig } from 'sanity/cli';

function requireEnv(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing ${name}`);
    }
    return value;
}

export default defineCliConfig({
    api: {
        projectId: requireEnv('SANITY_STUDIO_PROJECT_ID'),
        dataset: requireEnv('SANITY_STUDIO_DATASET'),
    },
});

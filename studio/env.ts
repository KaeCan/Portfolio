import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { loadEnv } from 'vite';

const root = path.dirname(fileURLToPath(import.meta.url));
const loaded = loadEnv(process.env.NODE_ENV ?? 'development', root, '');

for (const [key, value] of Object.entries(loaded)) {
    if (process.env[key] === undefined) {
        process.env[key] = value;
    }
}

export function requireEnv(name: string): string {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing ${name}`);
    }
    return value;
}

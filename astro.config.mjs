// @ts-check
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { pigment } from '@pigment-css/vite-plugin';
import { sanityPublishRefresh } from './src/integrations/sanity-publish-refresh.ts';

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
    integrations: [react(), sanityPublishRefresh()],
    site: 'https://kaecan.github.io',
    base: '/Portfolio',
    output: 'static',
    build: {
        inlineStylesheets: 'always',
    },
    vite: {
        plugins: [
            pigment({
                // @ts-expect-error theme accepts a file path string
                theme: './src/styles/pigment-theme.ts',
            }),
        ],
        resolve: {
            dedupe: ['react', 'react-dom', 'react-is'],
            alias: {
                '@': path.resolve(root, 'src'),
                'react-is': path.resolve(root, 'node_modules/react-is'),
            },
        },
        optimizeDeps: {
            include: ['react-is', '@mui/utils'],
        },
    },
});

// @ts-check
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import { pigment } from '@pigment-css/vite-plugin';

const root = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    site: 'https://fireb.github.io',
    base: '/Portfolio',
    output: 'static',
    build: {
        inlineStylesheets: 'always',
    },
    vite: {
        plugins: [
            pigment({
                // Pigment resolves the theme module at build time via file path.
                // @ts-expect-error — vite plugin accepts a theme file path string.
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
            include: [
                'react',
                'react-dom',
                'react/jsx-runtime',
                'react/jsx-dev-runtime',
                'react-dom/client',
                'react-is',
                '@mui/utils',
            ],
        },
        ssr: {
            optimizeDeps: {
                include: ['react', 'react-dom', 'react-dom/server', 'react-is'],
            },
        },
    },
});

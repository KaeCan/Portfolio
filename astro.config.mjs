// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [react()],
    site: 'https://fireb.github.io',
    base: '/Portfolio',
    output: 'static',
});

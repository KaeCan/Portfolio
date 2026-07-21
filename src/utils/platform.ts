/** Detect macOS from the user agent — safe for browser and Astro client scripts. */
export const isMacPlatform = (userAgent: string): boolean =>
    userAgent.toLowerCase().includes('mac');

export const isMacPlatform = (userAgent: string): boolean =>
    userAgent.toLowerCase().includes('mac');

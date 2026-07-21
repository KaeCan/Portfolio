import type { PaletteCommands, SitePaletteData } from '../types';

export const withBase = (href: string, base: string): string => {
    if (href.startsWith('http') || href.startsWith('mailto:')) return href;
    if (href === '/') return `${base}/`;
    return `${base}${href}`;
};

export const buildPaletteCommands = (
    site: SitePaletteData,
    base: string
): PaletteCommands => ({
    navigation: site.navigation.map(item => ({
        id: item.id,
        label: item.label,
        currentLabel: item.currentLabel,
        href: withBase(item.href, base),
        icon: item.icon,
        path: item.href === '/' ? '/' : item.href,
    })),
    social: site.social.map(item => ({
        id: item.id,
        label: item.label,
        href: withBase(item.href, base),
        icon: item.icon,
        external: item.external,
    })),
    actions: site.actions.map(item => ({
        id: item.id,
        label: item.label,
        href: withBase(item.href, base),
        icon: item.icon,
        external: item.external,
    })),
});

export const normalizePath = (currentPath: string, base: string): string => {
    const withoutBase = currentPath.startsWith(base)
        ? currentPath.slice(base.length) || '/'
        : currentPath;
    return withoutBase === '' ? '/' : withoutBase;
};

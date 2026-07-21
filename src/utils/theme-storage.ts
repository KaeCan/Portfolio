import { DEFAULT_THEME_ID } from '@/types/theme';

export const THEME_STORAGE_KEY = 'portfolio-theme';

export function readStoredThemeId(): string {
    if (typeof window === 'undefined') {
        return DEFAULT_THEME_ID;
    }

    return localStorage.getItem(THEME_STORAGE_KEY) ?? DEFAULT_THEME_ID;
}

export function writeStoredThemeId(id: string): void {
    localStorage.setItem(THEME_STORAGE_KEY, id);
}

export function applyThemeToDocument(id: string): void {
    if (id === DEFAULT_THEME_ID) {
        delete document.documentElement.dataset.theme;
        return;
    }

    document.documentElement.dataset.theme = id;
}

import { useState, useEffect, useRef, useCallback } from 'react';
import { useTheme } from '@/hooks/useTheme';
import { THEME_PRESETS } from '@/types/theme';
import { isMacPlatform } from '@/utils/platform';
import type {
    FlatPaletteItem,
    PaletteGroup,
    PaletteView,
    SubmenuPaletteItem,
    ThemePaletteItem,
    UseCommandPaletteOptions,
    UseCommandPaletteResult,
} from '../types';

const CHANGE_THEME_ITEM: SubmenuPaletteItem = {
    kind: 'submenu',
    id: 'change-theme',
    label: 'Change Theme',
    icon: 'palette',
    submenu: 'themes',
    badge: 'Themes',
};

export function useCommandPalette({
    commands,
    currentPath,
}: UseCommandPaletteOptions): UseCommandPaletteResult {
    const { themeId, setTheme } = useTheme();
    const [view, setView] = useState<PaletteView>('commands');
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [search, setSearch] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    const groups: PaletteGroup[] = [
        {
            id: 'navigation',
            heading: 'Navigation',
            items: commands.navigation.map(item => ({
                kind: 'link' as const,
                id: item.id,
                label:
                    currentPath === item.path ? item.currentLabel : item.label,
                href: item.href,
                icon: item.icon,
            })),
        },
        {
            id: 'social',
            heading: 'Social & Contact',
            items: commands.social.map(item => ({
                kind: 'link' as const,
                id: item.id,
                label: item.label,
                href: item.href,
                icon: item.icon,
                external: item.external,
                badge: item.external ? 'Link' : 'Action',
            })),
        },
        {
            id: 'actions',
            heading: 'Actions',
            items: [
                ...commands.actions.map(item => ({
                    kind: 'link' as const,
                    id: item.id,
                    label: item.label,
                    href: item.href,
                    icon: item.icon,
                    external: item.external,
                    badge: item.external ? 'Link' : 'Action',
                })),
                CHANGE_THEME_ITEM,
            ],
        },
    ];

    const filteredGroups = groups
        .map(group => ({
            ...group,
            items: group.items.filter(
                item =>
                    item.label.toLowerCase().includes(search.toLowerCase()) ||
                    group.heading.toLowerCase().includes(search.toLowerCase())
            ),
        }))
        .filter(group => group.items.length > 0);

    const themeItems: ThemePaletteItem[] = THEME_PRESETS.filter(preset =>
        preset.label.toLowerCase().includes(search.toLowerCase())
    ).map(preset => ({
        id: preset.id,
        label: preset.label,
        swatches: preset.swatches,
        isActive: preset.id === themeId,
    }));

    const commandItems = filteredGroups.flatMap(group => group.items);
    const allItems = view === 'themes' ? themeItems : commandItems;

    const open = useCallback((): void => {
        setIsOpen(true);
    }, []);

    const close = useCallback((): void => {
        setIsOpen(false);
    }, []);

    const toggle = useCallback((): void => {
        setIsOpen(prev => !prev);
    }, []);

    const runItem = useCallback((item: FlatPaletteItem): void => {
        if (item.kind === 'submenu') {
            setView('themes');
            setSearch('');
            setSelectedIndex(0);
            return;
        }

        if (item.external) {
            window.open(item.href, '_blank', 'noopener,noreferrer');
        } else {
            window.location.href = item.href;
        }
        setIsOpen(false);
    }, []);

    const runThemeItem = useCallback(
        (item: ThemePaletteItem): void => {
            setTheme(item.id);
        },
        [setTheme]
    );

    useEffect(() => {
        if (isOpen) {
            setIsMounted(true);
            let innerFrame = 0;
            const outerFrame = requestAnimationFrame((): void => {
                innerFrame = requestAnimationFrame((): void => {
                    setIsVisible(true);
                });
            });
            return (): void => {
                cancelAnimationFrame(outerFrame);
                cancelAnimationFrame(innerFrame);
            };
        }

        setIsVisible(false);
        const timeout = window.setTimeout((): void => {
            setIsMounted(false);
            setSearch('');
            setSelectedIndex(0);
            setView('commands');
        }, 300);

        return (): void => window.clearTimeout(timeout);
    }, [isOpen]);

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent): void => {
            if (
                (isMacPlatform(navigator.userAgent) ? e.metaKey : e.ctrlKey) &&
                e.key === 'k'
            ) {
                e.preventDefault();
                toggle();
            }
        };

        document.addEventListener('keydown', onKeyDown);
        return (): void => document.removeEventListener('keydown', onKeyDown);
    }, [toggle]);

    useEffect(() => {
        if (!isOpen) return;

        const onKeyDown = (e: KeyboardEvent): void => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex(prev =>
                    Math.min(prev + 1, Math.max(allItems.length - 1, 0))
                );
                return;
            }
            if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex(prev => Math.max(prev - 1, 0));
                return;
            }
            if (e.key === 'Enter') {
                e.preventDefault();
                if (view === 'themes') {
                    const item = themeItems[selectedIndex];
                    if (item) runThemeItem(item);
                } else {
                    const item = commandItems[selectedIndex];
                    if (item) runItem(item);
                }
                return;
            }
            if (e.key === 'Escape') {
                e.preventDefault();
                if (view === 'themes') {
                    setView('commands');
                    setSearch('');
                    setSelectedIndex(0);
                } else {
                    setIsOpen(false);
                }
            }
        };

        document.addEventListener('keydown', onKeyDown);
        return (): void => document.removeEventListener('keydown', onKeyDown);
    }, [
        isOpen,
        allItems.length,
        selectedIndex,
        runItem,
        runThemeItem,
        view,
        themeItems,
        commandItems,
    ]);

    useEffect(() => {
        setSelectedIndex(0);
    }, [search, view]);

    useEffect(() => {
        if (isOpen && isVisible) {
            inputRef.current?.focus();
        }
    }, [isOpen, isVisible, view]);

    useEffect(() => {
        if (!isOpen || !listRef.current) return;
        const selected = listRef.current.querySelector(
            `[data-item-index="${selectedIndex}"]`
        );
        selected?.scrollIntoView({ block: 'nearest' });
    }, [selectedIndex, isOpen]);

    return {
        view,
        isOpen,
        isMounted,
        isVisible,
        search,
        selectedIndex,
        filteredGroups,
        themeItems,
        inputRef,
        listRef,
        open,
        close,
        toggle,
        setSearch,
        setSelectedIndex,
        runItem,
        runThemeItem,
    };
}

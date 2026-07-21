import type { RefObject } from 'react';
import type { ActionIcon, NavIcon } from '@/types/icons';
import type {
    SiteLinkItem,
    SiteNavigationItem,
    SitePaletteData,
} from '@/types/content';

export interface NavCommand {
    id: string;
    label: string;
    currentLabel: string;
    href: string;
    icon: NavIcon;
    path: string;
}

export interface LinkCommand {
    id: string;
    label: string;
    href: string;
    icon: ActionIcon;
    external: boolean;
}

export interface PaletteCommands {
    navigation: NavCommand[];
    social: LinkCommand[];
    actions: LinkCommand[];
}

export type { SiteLinkItem, SiteNavigationItem, SitePaletteData };

export interface FlatPaletteItem {
    id: string;
    label: string;
    href: string;
    icon: NavIcon | ActionIcon;
    external?: boolean;
    badge?: string;
}

export interface PaletteGroup {
    id: string;
    heading: string;
    items: FlatPaletteItem[];
}

export interface UseCommandPaletteOptions {
    commands: PaletteCommands;
    currentPath: string;
}

export interface UseCommandPaletteResult {
    isOpen: boolean;
    isMounted: boolean;
    isVisible: boolean;
    search: string;
    selectedIndex: number;
    filteredGroups: PaletteGroup[];
    inputRef: RefObject<HTMLInputElement>;
    listRef: RefObject<HTMLDivElement>;
    open: () => void;
    close: () => void;
    toggle: () => void;
    setSearch: (value: string) => void;
    setSelectedIndex: (index: number) => void;
    runItem: (item: FlatPaletteItem) => void;
}

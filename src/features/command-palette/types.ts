import type { RefObject } from 'react';
import type { ActionIcon, NavIcon, UiIcon } from '@/types/icons';
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

export type PaletteView = 'commands' | 'themes';

export interface LinkPaletteItem {
    kind: 'link';
    id: string;
    label: string;
    href: string;
    icon: NavIcon | ActionIcon;
    external?: boolean;
    badge?: string;
}

export interface SubmenuPaletteItem {
    kind: 'submenu';
    id: string;
    label: string;
    icon: UiIcon;
    submenu: 'themes';
    badge?: string;
}

export type FlatPaletteItem = LinkPaletteItem | SubmenuPaletteItem;

export interface PaletteGroup {
    id: string;
    heading: string;
    items: FlatPaletteItem[];
}

export interface ThemePaletteItem {
    id: string;
    label: string;
    swatches: string[];
    isActive: boolean;
}

export interface UseCommandPaletteOptions {
    commands: PaletteCommands;
    currentPath: string;
    onDownloadResume: () => void | Promise<void>;
}

export interface UseCommandPaletteResult {
    view: PaletteView;
    isOpen: boolean;
    isMounted: boolean;
    isVisible: boolean;
    search: string;
    selectedIndex: number;
    filteredGroups: PaletteGroup[];
    themeItems: ThemePaletteItem[];
    inputRef: RefObject<HTMLInputElement>;
    listRef: RefObject<HTMLDivElement>;
    open: () => void;
    close: () => void;
    toggle: () => void;
    setSearch: (value: string) => void;
    setSelectedIndex: (index: number) => void;
    runItem: (item: FlatPaletteItem) => void;
    runThemeItem: (item: ThemePaletteItem) => void;
}

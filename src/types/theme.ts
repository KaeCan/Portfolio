export type ThemeMode = 'dark' | 'light';

export interface ThemePreset {
    id: string;
    label: string;
    mode: ThemeMode;
    swatches: string[];
}

export const DEFAULT_THEME_ID = 'mocha';

export const THEME_PRESETS: ThemePreset[] = [
    {
        id: 'dracula',
        label: 'Dracula',
        mode: 'dark',
        swatches: ['#bd93f9', '#ff79c6', '#8be9fd', '#282a36'],
    },
    {
        id: 'nord',
        label: 'Nord',
        mode: 'dark',
        swatches: ['#88c0d0', '#81a1c1', '#b48ead', '#2e3440'],
    },
    {
        id: 'mocha',
        label: 'Mocha',
        mode: 'dark',
        swatches: ['#cba6f7', '#f5c2e7', '#89b4fa', '#1e1e2e'],
    },
    {
        id: 'gruvbox-dark',
        label: 'Gruvbox Dark',
        mode: 'dark',
        swatches: ['#fe8019', '#fabd2f', '#b8bb26', '#282828'],
    },
    {
        id: 'tokyo-night',
        label: 'Tokyo Night',
        mode: 'dark',
        swatches: ['#7aa2f7', '#bb9af7', '#7dcfff', '#1a1b26'],
    },
    {
        id: 'rose-pine-moon',
        label: 'Rose Pine Moon',
        mode: 'dark',
        swatches: ['#c4a7e7', '#f6c177', '#eb6f92', '#232136'],
    },
    {
        id: 'one-dark',
        label: 'One Dark',
        mode: 'dark',
        swatches: ['#61afef', '#c678dd', '#98c379', '#282c34'],
    },
    {
        id: 'latte',
        label: 'Catppuccin Latte',
        mode: 'light',
        swatches: ['#8839ef', '#ea76cb', '#1e66f5', '#eff1f5'],
    },
    {
        id: 'solarized-light',
        label: 'Solarized Light',
        mode: 'light',
        swatches: ['#268bd2', '#2aa198', '#d33682', '#fdf6e3'],
    },
    {
        id: 'gruvbox-light',
        label: 'Gruvbox Light',
        mode: 'light',
        swatches: ['#fe8019', '#fabd2f', '#b8bb26', '#fbf1c7'],
    },
    {
        id: 'rose-pine-dawn',
        label: 'Rose Pine Dawn',
        mode: 'light',
        swatches: ['#907aa9', '#ea9d34', '#d7827e', '#faf4ed'],
    },
    {
        id: 'paper',
        label: 'Paper',
        mode: 'light',
        swatches: ['#2563eb', '#7c3aed', '#0891b2', '#f8fafc'],
    },
];

export function getThemePreset(id: string): ThemePreset | undefined {
    return THEME_PRESETS.find(preset => preset.id === id);
}

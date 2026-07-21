export const NAV_ICONS = ['home', 'experience'] as const;
export type NavIcon = (typeof NAV_ICONS)[number];

export const ACTION_ICONS = ['github', 'linkedin', 'email', 'resume'] as const;
export type ActionIcon = (typeof ACTION_ICONS)[number];

export const UI_ICONS = ['link', 'menu', 'user', 'palette'] as const;
export type UiIcon = (typeof UI_ICONS)[number];

export type ContentIcon = NavIcon | ActionIcon;
export type IconName = ContentIcon | UiIcon;

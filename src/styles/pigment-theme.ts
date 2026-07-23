import { extendTheme } from '@pigment-css/react/utils';

export const theme = extendTheme({
    colorSchemes: {
        dark: {
            palette: {
                primary: {
                    main: 'var(--color-primary)',
                    dark: 'var(--color-primary-dark)',
                    light: 'var(--color-primary-light)',
                },
                accent: {
                    main: 'var(--color-accent)',
                },
                text: {
                    primary: 'var(--color-text-primary)',
                    secondary: 'var(--color-text-secondary)',
                    muted: 'var(--color-text-muted)',
                },
                background: {
                    default: 'var(--color-bg)',
                    paper: 'var(--color-surface)',
                },
            },
        },
    },
    spacing: 8,
    shape: {
        borderRadius: 8,
    },
});

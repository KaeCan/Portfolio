import { styled } from '@pigment-css/react';

const touchGlass = {
    '@media (hover: none) and (pointer: coarse)': {
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none',
        backgroundColor:
            'color-mix(in srgb, var(--color-surface) 92%, var(--color-bg))',
    },
} as const;

export const Glass = styled('div')({
    backgroundColor: 'var(--glass-bg)',
    backdropFilter: 'blur(var(--glass-blur))',
    WebkitBackdropFilter: 'blur(var(--glass-blur))',
    border: '1px solid var(--glass-border)',
    borderRadius: '1.5rem',
    boxShadow: 'var(--shadow-glass)',
    ...touchGlass,
});

export const GlassLight = styled('div')({
    backgroundColor: 'var(--glass-bg-light)',
    backdropFilter: 'blur(var(--glass-blur-sm))',
    WebkitBackdropFilter: 'blur(var(--glass-blur-sm))',
    border: '1px solid var(--glass-border-subtle)',
    borderRadius: '1rem',
    boxShadow: 'var(--shadow-glass-sm)',
    ...touchGlass,
});

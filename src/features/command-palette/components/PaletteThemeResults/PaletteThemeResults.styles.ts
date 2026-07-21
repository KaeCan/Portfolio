import { styled } from '@pigment-css/react';

export const ThemeLabel = styled('span')({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    '& > span:last-child:not(:only-child)': {
        color: 'var(--color-text-on-glass-muted)',
        fontSize: '12px',
    },
});

export const SwatchRow = styled('span')({
    display: 'flex',
    gap: '0.25rem',
    marginLeft: 'auto',
});

export const Swatch = styled('span')({
    width: '12px',
    height: '12px',
    borderRadius: '50%',
    border: '1px solid var(--glass-border-subtle)',
    flexShrink: 0,
});

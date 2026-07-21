import { styled } from '@pigment-css/react';

export const Footer = styled('div')({
    display: 'flex',
    gap: '1rem',
    padding: '0.75rem 1.25rem',
    color: 'var(--color-text-on-glass-muted)',
    fontSize: '12px',
    borderTop: '1px solid var(--glass-border)',
});

export const Hint = styled('span')({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.25rem',
});

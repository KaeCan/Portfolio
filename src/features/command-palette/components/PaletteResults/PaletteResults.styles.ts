import { css, styled } from '@pigment-css/react';

export const Results = styled('div')({
    maxHeight: '400px',
    overflowY: 'auto',
    padding: '0.5rem 0',
});

export const Group = styled('div')({
    marginBottom: '0.5rem',
});

export const GroupHeading = styled('p')({
    color: 'var(--color-text-on-glass-muted)',
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    padding: '0.5rem 1.25rem',
});

export const Item = styled('button')({
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    width: 'calc(100% - 1rem)',
    margin: '0 0.5rem',
    padding: '0.75rem 1.25rem',
    border: 'none',
    borderRadius: '8px',
    background: 'transparent',
    color: 'var(--color-text-on-glass-soft)',
    fontSize: '14px',
    fontFamily: 'inherit',
    textAlign: 'left',
    cursor: 'pointer',
});

export const itemSelected = css({
    backgroundColor: 'var(--color-interactive-bg)',
    color: 'var(--color-text-on-glass-strong)',
    boxShadow: 'var(--shadow-interactive)',
});

export const Badge = styled('span')({
    marginLeft: 'auto',
    color: 'var(--color-text-on-glass-muted)',
    fontSize: '12px',
});

export const Empty = styled('p')({
    padding: '2rem 1.25rem',
    textAlign: 'center',
    color: 'var(--color-text-on-glass-muted)',
});

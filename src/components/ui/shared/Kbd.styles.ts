import { styled } from '@pigment-css/react';

export const Kbd = styled('kbd')({
    display: 'inline-block',
    padding: '0.25rem 0.5rem',
    fontSize: '0.75rem',
    fontWeight: 600,
    color: 'var(--color-text-heading)',
    backgroundColor: 'var(--color-surface-muted)',
    border: '1px solid var(--glass-border)',
    borderRadius: '0.25rem',
    fontFamily:
        "ui-monospace, SFMono-Regular, 'SF Mono', Consolas, 'Liberation Mono', Menlo, monospace",
});

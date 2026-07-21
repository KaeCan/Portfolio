import { styled } from '@pigment-css/react';

export const Wrap = styled('div')({
    borderBottom: '1px solid var(--glass-border)',
});

export const Input = styled('input')({
    width: '100%',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    color: 'var(--color-text-on-glass)',
    fontSize: '16px',
    padding: '16px 20px',
    fontFamily: 'inherit',
    '&::placeholder': {
        color: 'var(--color-text-on-glass-subtle)',
    },
});

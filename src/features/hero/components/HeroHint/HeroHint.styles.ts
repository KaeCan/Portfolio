import { styled, keyframes } from '@pigment-css/react';

const fadeUp = keyframes({
    to: {
        opacity: 1,
        transform: 'translateY(0)',
    },
});

export const Wrap = styled('div')({
    marginBottom: '3rem',
    opacity: 0,
    transform: 'translateY(30px)',
    animation: `${fadeUp} 0.8s ease 0.5s forwards`,
});

export const Hint = styled('div')({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '0.75rem 1.5rem',
    color: 'var(--color-text-on-glass)',
    borderRadius: '9999px',
    fontSize: '0.875rem',
});

export const Kbds = styled('span')({
    display: 'flex',
    alignItems: 'center',
    gap: '0.25rem',
});

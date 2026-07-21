import { styled, keyframes } from '@pigment-css/react';

const fadeUp = keyframes({
    to: {
        opacity: 1,
        transform: 'translateY(0)',
    },
});

export const Wrap = styled('div')({
    marginBottom: '2rem',
    opacity: 0,
    transform: 'translateY(-30px)',
    animation: `${fadeUp} 0.8s ease forwards`,
});

export const Ring = styled('div')({
    width: '8rem',
    height: '8rem',
    margin: '0 auto',
    borderRadius: '50%',
    background: 'var(--gradient-avatar)',
    padding: '4px',
    boxShadow: 'var(--shadow-glass)',
});

export const Avatar = styled('div')({
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    backgroundColor: 'var(--color-surface-muted)',
    overflow: 'hidden',
});

export const AvatarImage = styled('img')({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center',
    display: 'block',
});

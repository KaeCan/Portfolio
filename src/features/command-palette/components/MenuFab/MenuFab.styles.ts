import { styled } from '@pigment-css/react';

export const Fab = styled('button')({
    position: 'fixed',
    bottom: '1.5rem',
    left: '1.5rem',
    zIndex: 1300,
    width: '3.5rem',
    height: '3.5rem',
    border: '1px solid var(--glass-border)',
    borderRadius: '50%',
    backgroundColor: 'var(--glass-bg-strong)',
    WebkitBackdropFilter: 'blur(var(--glass-blur-sm))',
    backdropFilter: 'blur(var(--glass-blur-sm))',
    color: 'var(--color-text-on-glass)',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'var(--shadow-glass-sm)',
    transition: 'transform 0.3s ease-out, background-color 0.3s ease-out',
    '&:hover': {
        transform: 'translateY(-2px)',
        backgroundColor: 'var(--glass-bg-strong-hover)',
    },
});

import { styled } from '@pigment-css/react';

export const GithubWrap = styled('div')({
    marginTop: '3rem',
    display: 'flex',
    justifyContent: 'center',
});

export const GithubBtn = styled('a')({
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '1rem 2rem',
    color: 'var(--color-text-on-glass)',
    borderRadius: '1rem',
    backgroundColor: 'var(--glass-bg)',
    WebkitBackdropFilter: 'blur(var(--glass-blur-sm))',
    backdropFilter: 'blur(var(--glass-blur-sm))',
    border: '1px solid var(--glass-border)',
    boxShadow: 'var(--shadow-glass)',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'transform 300ms ease-out, background-color 300ms ease-out',
    '&:hover': {
        transform: 'translateY(-2px)',
        backgroundColor: 'var(--color-interactive-bg)',
        borderColor: 'var(--glass-border-accent)',
        color: 'var(--color-accent)',
    },
});

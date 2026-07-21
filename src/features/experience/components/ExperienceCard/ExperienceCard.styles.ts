import { styled } from '@pigment-css/react';

export const Card = styled('article')({
    backgroundColor: 'var(--glass-bg)',
    backdropFilter: 'blur(var(--glass-blur))',
    WebkitBackdropFilter: 'blur(var(--glass-blur))',
    border: '1px solid var(--glass-border)',
    borderRadius: '1.5rem',
    boxShadow: 'var(--shadow-glass)',
    padding: '2rem',
    transition: 'transform 300ms ease-out, box-shadow 300ms ease-out',
    '&:hover': {
        transform: 'translateY(-0.5rem)',
        backgroundColor: 'var(--glass-bg-hover)',
        borderColor: 'var(--glass-border-accent)',
    },
    '@media (hover: none) and (pointer: coarse)': {
        backdropFilter: 'none',
        WebkitBackdropFilter: 'none',
        backgroundColor:
            'color-mix(in srgb, var(--color-surface) 92%, var(--color-bg))',
        '&:hover': {
            backgroundColor:
                'color-mix(in srgb, var(--color-surface) 96%, var(--color-bg))',
        },
    },
});

export const Header = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '1rem',
    gap: '0.75rem',
    '@media (min-width: 768px)': {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
});

export const Position = styled('h2')({
    fontSize: '1.25rem',
    fontWeight: 700,
    color: 'var(--color-text-heading)',
    marginBottom: '0.25rem',
});

export const Company = styled('p')({
    fontSize: '1.125rem',
    fontWeight: 600,
    color: 'var(--color-accent)',
});

export const Duration = styled('span')({
    display: 'inline-block',
    padding: '0.5rem 1rem',
    backgroundColor: 'var(--color-accent-surface)',
    color: 'var(--color-accent)',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: 500,
    alignSelf: 'flex-start',
});

export const Summary = styled('p')({
    color: 'var(--color-text-muted)',
    fontStyle: 'italic',
    marginBottom: '1rem',
    lineHeight: 1.5,
    fontSize: '0.95rem',
});

export const Description = styled('p')({
    color: 'var(--color-text-secondary)',
    marginBottom: '1.5rem',
    lineHeight: 1.6,
});

export const Bullets = styled('ul')({
    listStyle: 'none',
    marginBottom: '1.5rem',
});

export const BulletItem = styled('li')({
    color: 'var(--color-text-secondary)',
    lineHeight: 1.6,
    marginBottom: '0.5rem',
    paddingLeft: '1rem',
    position: 'relative',
    '&::before': {
        content: '"•"',
        position: 'absolute',
        left: 0,
        color: 'var(--color-accent)',
    },
});

export const TechList = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
});

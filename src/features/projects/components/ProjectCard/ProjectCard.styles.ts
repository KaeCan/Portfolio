import { styled } from '@pigment-css/react';

export const Card = styled('article')({
    backgroundColor: 'var(--glass-bg)',
    WebkitBackdropFilter: 'blur(var(--glass-blur))',
    backdropFilter: 'blur(var(--glass-blur))',
    border: '1px solid var(--glass-border)',
    borderRadius: '1.5rem',
    boxShadow: 'var(--shadow-glass)',
    overflow: 'hidden',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 300ms ease-out',
    '&:hover': {
        transform: 'translateY(-0.75rem)',
        backgroundColor: 'var(--glass-bg-hover)',
        borderColor: 'var(--glass-border-accent)',
    },
    '@media (hover: none) and (pointer: coarse)': {
        WebkitBackdropFilter: 'none',
        backdropFilter: 'none',
        backgroundColor:
            'color-mix(in srgb, var(--color-surface) 92%, var(--color-bg))',
        '&:hover': {
            backgroundColor:
                'color-mix(in srgb, var(--color-surface) 96%, var(--color-bg))',
        },
    },
});

export const ImageWrap = styled('div')({
    height: '12rem',
    backgroundColor: 'var(--color-surface-muted)',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        opacity: 0.8,
    },
});

export const Placeholder = styled('span')({
    color: 'var(--color-text-muted)',
    fontSize: '3rem',
});

export const Content = styled('div')({
    padding: '1.5rem',
    flexGrow: 1,
});

export const Title = styled('h2')({
    fontSize: '1.25rem',
    fontWeight: 700,
    color: 'var(--color-text-heading)',
    marginBottom: '0.75rem',
});

export const Description = styled('p')({
    color: 'var(--color-text-secondary)',
    marginBottom: '1rem',
    lineHeight: 1.6,
});

export const TechList = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '0.5rem',
});

export const Actions = styled('div')({
    padding: '0 1.5rem 1.5rem',
    display: 'flex',
    gap: '1rem',
});

export const Btn = styled('a')({
    flex: 1,
    textAlign: 'center',
    padding: '0.75rem 1rem',
    fontWeight: 500,
    borderRadius: '0.5rem',
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    transition: 'background-color 250ms ease-out, transform 250ms ease-out',
    '&[data-full="true"]': {
        flex: '1 1 100%',
    },
});

export const BtnPrimary = styled(Btn)({
    backgroundColor: 'var(--color-interactive-bg)',
    color: 'var(--color-text-heading)',
    border: '1px solid var(--glass-border-accent)',
    '&:hover': {
        backgroundColor: 'var(--color-interactive-bg-hover)',
        transform: 'translateY(-2px)',
    },
});

export const BtnSecondary = styled(Btn)({
    backgroundColor: 'var(--glass-bg)',
    color: 'var(--color-text-heading)',
    border: '1px solid var(--glass-border)',
    '&:hover': {
        backgroundColor: 'var(--color-interactive-bg)',
        borderColor: 'var(--glass-border-accent)',
        transform: 'translateY(-2px)',
    },
});

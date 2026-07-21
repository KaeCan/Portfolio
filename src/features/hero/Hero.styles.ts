import { styled, keyframes } from '@pigment-css/react';

const fadeRight = keyframes({
    to: {
        opacity: 1,
        transform: 'translateX(0)',
    },
});

const fadeLeft = keyframes({
    to: {
        opacity: 1,
        transform: 'translateX(0)',
    },
});

export const Section = styled('section')({
    height: '100dvh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
});

export const Container = styled('div')({
    maxWidth: 'var(--page-max)',
    margin: '0 auto',
    padding: '0 1rem',
    textAlign: 'center',
});

export const Heading = styled('h1')({
    fontSize: 'clamp(3rem, 8vw, 4.5rem)',
    fontWeight: 700,
    color: 'var(--color-text-heading)',
    marginBottom: '1.5rem',
    opacity: 0,
    transform: 'translateX(-40px)',
    animation: `${fadeRight} 0.8s ease 0.1s forwards`,
});

export const Subtitle = styled('p')({
    fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
    color: 'var(--color-text-secondary)',
    marginBottom: '2rem',
    lineHeight: 1.6,
    opacity: 0,
    transform: 'translateX(40px)',
    animation: `${fadeLeft} 0.8s ease 0.3s forwards`,
});

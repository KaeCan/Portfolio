import { styled } from '@pigment-css/react';

export const Section = styled('section')({
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflowY: 'auto',
    padding: '2rem 0 4rem',
    '@media (min-width: 768px)': {
        padding: '3rem 0 4rem',
    },
});

export const Container = styled('div')({
    maxWidth: 'var(--page-max-wide)',
    margin: '0 auto',
    padding: '0 1rem',
    width: '100%',
});

export const Grid = styled('div')({
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '2rem',
    '@media (min-width: 768px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
    },
});

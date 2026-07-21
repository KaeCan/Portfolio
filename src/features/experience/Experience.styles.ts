import { styled } from '@pigment-css/react';

export const Section = styled('section')({
    minHeight: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: '2rem 0 4rem',
    '@media (min-width: 768px)': {
        padding: '3rem 0 4rem',
    },
});

export const Container = styled('div')({
    maxWidth: 'var(--page-max)',
    margin: '0 auto',
    padding: '0 1rem',
    width: '100%',
});

export const List = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
});

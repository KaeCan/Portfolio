import { styled } from '@pigment-css/react';
import { GlassLight } from '@/components/ui/shared/Glass.styles';

export const Stats = styled('div')({
    marginTop: '4rem',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '1.5rem',
    '@media (min-width: 768px)': {
        gridTemplateColumns: '1fr 2fr',
    },
});

export const StatGrid = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '1.5rem',
    '@media (min-width: 768px)': {
        gridTemplateColumns: 'repeat(3, 1fr)',
    },
});

export const Stat = styled(GlassLight)({
    textAlign: 'center',
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '7.5rem',
    transition: 'transform 300ms ease-out',
    '&:hover': {
        transform: 'translateY(-2px)',
    },
});

export const StatNumber = styled('p')({
    fontSize: '1.875rem',
    fontWeight: 700,
    color: 'var(--color-primary-light)',
    marginBottom: '0.5rem',
});

export const StatLabel = styled('p')({
    color: 'var(--color-text-secondary)',
    fontSize: '0.875rem',
});

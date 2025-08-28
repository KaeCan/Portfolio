import type { SxProps, Theme } from '@mui/material';

const getExperienceSectionStyles = (): SxProps<Theme> => ({
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflowY: 'auto',
    paddingY: { xs: 4, md: 6 },
});

const getExperienceContainerStyles = (): SxProps<Theme> => ({
    maxWidth: '64rem',
    mx: 'auto',
    px: 2,
});

const getExperienceCardStyles = (): SxProps<Theme> => ({
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(24px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '1.5rem',
    p: 4,
    boxShadow:
        '0 20px 40px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    transform: 'translateY(0)',
    transition: 'all 300ms ease-out',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow:
            '0 25px 50px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        transform: 'translateY(-0.5rem)',
    },
});

const getExperienceHeaderRowStyles = (): SxProps<Theme> => ({
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: { md: 'center' },
    justifyContent: { md: 'space-between' },
    mb: 2,
});

const getExperiencePositionStyles = (): SxProps<Theme> => ({
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#f1f5f9',
    mb: 1,
});

const getExperienceCompanyStyles = (): SxProps<Theme> => ({
    fontSize: '1.125rem',
    fontWeight: 600,
    color: '#60a5fa',
});

const getExperienceDurationStyles = (): SxProps<Theme> => ({
    display: 'inline-block',
    px: 2,
    py: 1,
    backgroundColor: '#1e3a8a',
    color: '#93c5fd',
    borderRadius: '9999px',
    fontSize: '0.875rem',
    fontWeight: 500,
    mt: { xs: 1, md: 0 },
});

const getExperienceDescriptionStyles = (): SxProps<Theme> => ({
    color: '#cbd5e1',
    mb: 3,
    lineHeight: 1.6,
});

const getExperienceTechStyles = (): SxProps<Theme> => ({
    px: 1.5,
    py: 0.5,
    backgroundColor: '#374151',
    color: '#cbd5e1',
    fontSize: '0.875rem',
    fontWeight: 500,
    borderRadius: '9999px',
});

const getStatsGridStyles = (): SxProps<Theme> => ({
    mt: 8,
    display: 'grid',
    gridTemplateColumns: { xs: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' },
    gap: 3,
});

const getStatCardStyles = (): SxProps<Theme> => ({
    textAlign: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    p: 3,
    borderRadius: '1rem',
    boxShadow:
        '0 8px 24px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    transition: 'all 300ms ease-out',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        transform: 'translateY(-2px)',
        boxShadow:
            '0 12px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
    },
});

const getStatNumberStyles = (): SxProps<Theme> => ({
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#60a5fa',
    mb: 1,
});

const getStatLabelStyles = (): SxProps<Theme> => ({
    color: '#cbd5e1',
    fontSize: '0.875rem',
});

const getExperienceMainContainerStyles = (): SxProps<Theme> => ({
    maxWidth: '64rem',
    mx: 'auto',
});

const getExperienceListStyles = (): SxProps<Theme> => ({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
});

const getExperienceBoxStyles = (): SxProps<Theme> => ({
    mt: { xs: 1, md: 0 },
});

const getTechContainerStyles = (): SxProps<Theme> => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: 1,
});

const experienceStyles = {
    getExperienceSectionStyles,
    getExperienceContainerStyles,
    getExperienceMainContainerStyles,
    getExperienceListStyles,
    getExperienceCardStyles,
    getExperienceHeaderRowStyles,
    getExperiencePositionStyles,
    getExperienceCompanyStyles,
    getExperienceDurationStyles,
    getExperienceBoxStyles,
    getExperienceDescriptionStyles,
    getTechContainerStyles,
    getExperienceTechStyles,
    getStatsGridStyles,
    getStatCardStyles,
    getStatNumberStyles,
    getStatLabelStyles,
};

export default experienceStyles;

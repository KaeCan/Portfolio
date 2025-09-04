// Removed unused imports
import type { StyleObject } from '../../shared/types';
import appStyles from '../../shared/styles/app.styles';

const getExperienceSectionStyles = (): StyleObject => ({
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflowY: 'auto',
    paddingY: { xs: 4, md: 6 },
});

const getExperienceContainerStyles = (): StyleObject => ({
    maxWidth: '64rem',
    mx: 'auto',
    px: 2,
});

const getExperienceCardStyles = (): StyleObject => ({
    ...appStyles.getGlassmorphismBase({
        opacity: 0.08,
        blur: 24,
        borderRadius: '1.5rem',
        borderOpacity: 0.15,
        shadowIntensity: 'medium'
    }),
    p: 4,
    transform: 'translateY(0)',
    transition: 'all 300ms ease-out',
    '&:hover': {
        ...appStyles.getGlassmorphismHover({ hoverIntensity: 'medium' }),
        transform: 'translateY(-0.5rem)',
    },
});

const getExperienceHeaderRowStyles = (): StyleObject => ({
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: { md: 'center' },
    justifyContent: { md: 'space-between' },
    mb: 2,
});

const getExperiencePositionStyles = (): StyleObject => ({
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#f1f5f9',
    mb: 1,
});

const getExperienceCompanyStyles = (): StyleObject => ({
    fontSize: '1.125rem',
    fontWeight: 600,
    color: '#60a5fa',
});

const getExperienceSummaryStyles = (): StyleObject => ({
    color: '#94a3b8',
    fontStyle: 'italic',
    mb: 2,
    lineHeight: 1.5,
    fontSize: '0.95rem',
});

const getExperienceDurationStyles = (): StyleObject => ({
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

const getExperienceDescriptionStyles = (): StyleObject => ({
    color: '#cbd5e1',
    mb: 3,
    lineHeight: 1.6,
});

const getExperienceDescriptionListStyles = (): StyleObject => ({
    mb: 3,
});

const getExperienceDescriptionBulletStyles = (): StyleObject => ({
    color: '#cbd5e1',
    lineHeight: 1.6,
    mb: 1,
    '&:last-child': {
        mb: 0,
    },
});

const getExperienceTechStyles = (): StyleObject => ({
    px: 1.5,
    py: 0.5,
    backgroundColor: '#374151',
    color: '#cbd5e1',
    fontSize: '0.875rem',
    fontWeight: 500,
    borderRadius: '9999px',
});

const getStatsGridStyles = (): StyleObject => ({
    mt: 8,
    display: 'grid',
    gridTemplateColumns: {
        xs: '1fr',
        md: '1fr 2fr',
    },
    gap: 3,
});

const getStatCardStyles = (): StyleObject => ({
    textAlign: 'center',
    ...appStyles.getGlassmorphismBase({
        opacity: 0.06,
        blur: 16,
        borderRadius: '1rem',
        borderOpacity: 0.1,
        shadowIntensity: 'light'
    }),
    p: 3,
    transition: 'all 300ms ease-out',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '120px',
    '&:hover': {
        ...appStyles.getGlassmorphismHover({ hoverIntensity: 'subtle' }),
        transform: 'translateY(-2px)',
    },
});

const getStatNumberStyles = (): StyleObject => ({
    fontSize: '1.875rem',
    fontWeight: 'bold',
    color: '#60a5fa',
    mb: 1,
});

const getStatLabelStyles = (): StyleObject => ({
    color: '#cbd5e1',
    fontSize: '0.875rem',
});

const getExperienceMainContainerStyles = (): StyleObject => ({
    maxWidth: '64rem',
    mx: 'auto',
});

const getExperienceListStyles = (): StyleObject => ({
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
});

const getExperienceBoxStyles = (): StyleObject => ({
    mt: { xs: 1, md: 0 },
});

const getTechContainerStyles = (): StyleObject => ({
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
    getExperienceSummaryStyles,
    getExperienceDurationStyles,
    getExperienceBoxStyles,
    getExperienceDescriptionStyles,
    getExperienceDescriptionListStyles,
    getExperienceDescriptionBulletStyles,
    getTechContainerStyles,
    getExperienceTechStyles,
    getStatsGridStyles,
    getStatCardStyles,
    getStatNumberStyles,
    getStatLabelStyles,
};

export default experienceStyles;

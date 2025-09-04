import type { StyleObject } from '../../shared/types';
import appStyles from '../../shared/styles/app.styles';

const getHeroSectionStyles = (): StyleObject => ({
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    '& .animate-profile-image': {
        opacity: 1,
        transform: 'translateY(0)',
    },
    '& .animate-heading': {
        opacity: 1,
        transform: 'translateX(0)',
        transitionDelay: '0.1s',
    },
    '& .animate-subtitle': {
        opacity: 1,
        transform: 'translateX(0)',
        transitionDelay: '0.3s',
    },
    '& .animate-command-hint': {
        opacity: 1,
        transform: 'translateY(0)',
        transitionDelay: '0.5s',
    },
});

const getHeroContainerStyles = (): StyleObject => ({
    maxWidth: '64rem',
    mx: 'auto',
    px: 2,
    textAlign: 'center',
});

const getProfileImageContainerStyles = (): StyleObject => ({
    mb: 4,
    opacity: 0,
    transform: 'translateY(-30px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease',
});

const getProfileImageOuterStyles = (): StyleObject => ({
    width: 128,
    height: 128,
    mx: 'auto',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #3b82f6, #9333ea)',
    padding: '4px',
    ...appStyles.getGlassmorphismBase({
        opacity: 0.1,
        blur: 20,
        borderRadius: '50%',
        borderOpacity: 0.1,
        shadowIntensity: 'medium'
    }),
});

const getProfileImageInnerStyles = (): StyleObject => ({
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    backgroundColor: '#374151',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const getMainHeadingStyles = (): StyleObject => ({
    fontSize: { xs: '3rem', md: '4.5rem' },
    fontWeight: 'bold',
    color: '#f1f5f9',
    mb: 3,
    opacity: 0,
    transform: 'translateX(-40px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease',
});

const getNameGradientStyles = (): StyleObject => ({
    background: 'linear-gradient(135deg, #2563eb, #9333ea)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
});

const getSubtitleStyles = (): StyleObject => ({
    fontSize: { xs: '1.25rem', md: '1.5rem' },
    color: '#cbd5e1',
    mb: 4,
    lineHeight: 1.6,
    opacity: 0,
    transform: 'translateX(40px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease',
});

const getCommandHintContainerStyles = (): StyleObject => ({
    mb: 6,
    opacity: 0,
    transform: 'translateY(30px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease',
});

const getCommandHintStyles = (): StyleObject => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 1,
    px: 3,
    py: 1.5,
    color: 'rgba(255, 255, 255, 0.9)',
    ...appStyles.getGlassmorphismBase({
        opacity: 0.08,
        blur: 20,
        borderRadius: '9999px',
        borderOpacity: 0.15,
        shadowIntensity: 'light'
    }),
});

const getKbdStyles = (): StyleObject => ({
    px: 1,
    py: 0.5,
    fontSize: '0.75rem',
    fontWeight: 600,
    color: '#f1f5f9',
    backgroundColor: '#374151',
    border: '1px solid #4b5563',
    borderRadius: '0.25rem',
});

const getKbdContainerStyles = (): StyleObject => ({
    display: 'flex',
    alignItems: 'center',
    gap: 0.5,
});

const heroStyles = {
    getHeroSectionStyles,
    getHeroContainerStyles,
    getProfileImageContainerStyles,
    getProfileImageOuterStyles,
    getProfileImageInnerStyles,
    getMainHeadingStyles,
    getNameGradientStyles,
    getSubtitleStyles,
    getCommandHintContainerStyles,
    getCommandHintStyles,
    getKbdStyles,
    getKbdContainerStyles,
};

export default heroStyles;

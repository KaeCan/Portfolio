import type { SxProps, Theme } from '@mui/material';

const getHeroSectionStyles = (): SxProps<Theme> => ({
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

const getHeroContainerStyles = (): SxProps<Theme> => ({
    maxWidth: '64rem',
    mx: 'auto',
    px: 2,
    textAlign: 'center',
});

const getProfileImageContainerStyles = (): SxProps<Theme> => ({
    mb: 4,
    opacity: 0,
    transform: 'translateY(-30px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease',
});

const getProfileImageOuterStyles = (): SxProps<Theme> => ({
    width: 128,
    height: 128,
    mx: 'auto',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #3b82f6, #9333ea)',
    padding: '4px',
    backdropFilter: 'blur(20px)',
    boxShadow:
        '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
});

const getProfileImageInnerStyles = (): SxProps<Theme> => ({
    width: '100%',
    height: '100%',
    borderRadius: '50%',
    backgroundColor: '#374151',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const getMainHeadingStyles = (): SxProps<Theme> => ({
    fontSize: { xs: '3rem', md: '4.5rem' },
    fontWeight: 'bold',
    color: '#f1f5f9',
    mb: 3,
    opacity: 0,
    transform: 'translateX(-40px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease',
});

const getNameGradientStyles = (): SxProps<Theme> => ({
    background: 'linear-gradient(135deg, #2563eb, #9333ea)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
});

const getSubtitleStyles = (): SxProps<Theme> => ({
    fontSize: { xs: '1.25rem', md: '1.5rem' },
    color: '#cbd5e1',
    mb: 4,
    lineHeight: 1.6,
    opacity: 0,
    transform: 'translateX(40px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease',
});

const getCommandHintContainerStyles = (): SxProps<Theme> => ({
    mb: 6,
    opacity: 0,
    transform: 'translateY(30px)',
    transition: 'opacity 0.8s ease, transform 0.8s ease',
});

const getCommandHintStyles = (): SxProps<Theme> => ({
    display: 'inline-flex',
    alignItems: 'center',
    gap: 1,
    px: 3,
    py: 1.5,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '9999px',
    color: 'rgba(255, 255, 255, 0.9)',
    boxShadow:
        '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
});

const getKbdStyles = (): SxProps<Theme> => ({
    px: 1,
    py: 0.5,
    fontSize: '0.75rem',
    fontWeight: 600,
    color: '#f1f5f9',
    backgroundColor: '#374151',
    border: '1px solid #4b5563',
    borderRadius: '0.25rem',
});

const getKbdContainerStyles = (): SxProps<Theme> => ({
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

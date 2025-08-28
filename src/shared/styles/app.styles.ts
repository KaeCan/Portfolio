import type { SxProps, Theme } from '@mui/material';

const getAppContainerStyles = (): SxProps<Theme> => ({
    minHeight: '100vh',
    background:
        'linear-gradient(-45deg, #455376, #3c4f6e, #2f3d52, #24354f, #352e5a, #322a52)',
    backgroundSize: '400% 400%',
    animation: 'gradient-shift 15s ease infinite',
    '@keyframes gradient-shift': {
        '0%': {
            backgroundPosition: '0% 50%',
        },
        '50%': {
            backgroundPosition: '100% 50%',
        },
        '100%': {
            backgroundPosition: '0% 50%',
        },
    },
});

const getTransitionGroupStyles = (): React.CSSProperties => ({
    minHeight: '100vh',
});

const getPageContainerStyles = (): SxProps<Theme> => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
});

const getFabStyles = (): SxProps<Theme> => ({
    position: 'fixed',
    bottom: 24,
    left: 24,
    zIndex: 1300,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(16px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow:
        '0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
    color: 'rgba(255, 255, 255, 0.9)',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        boxShadow:
            '0 12px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
        transform: 'translateY(-2px)',
    },
    transition: 'all 0.3s ease-out',
});

const appStyles = {
    getAppContainerStyles,
    getTransitionGroupStyles,
    getPageContainerStyles,
    getFabStyles,
};

export default appStyles;

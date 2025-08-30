import type { SxProps, Theme } from '@mui/material';

const getAppContainerStyles = (): SxProps<Theme> => ({
    background:
        'linear-gradient(-45deg, #77528d, #4b3c6e, #2d3a4e, #24354f, #23345a, #364a75)',
    backgroundSize: '200% 200%',
    animation: 'gradient-shift 15s ease infinite',
    minHeight: '100vh',
    width: '100%',
    position: 'relative',
    zIndex: 0,
});

const getPageContainerStyles = (): SxProps<Theme> => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'transparent',
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
    getPageContainerStyles,
    getFabStyles,
};

export default appStyles;

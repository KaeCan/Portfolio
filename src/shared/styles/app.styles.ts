// Removed unused imports
import type { StyleObject } from '../types';

// Glassmorphism base properties
interface GlassmorphismConfig {
    opacity?: number;
    blur?: number;
    borderRadius?: string | number;
    borderOpacity?: number;
    shadowIntensity?: 'light' | 'medium' | 'heavy';
    hoverIntensity?: 'subtle' | 'medium' | 'strong';
    transition?: string;
    backgroundColor?: string; // Allow custom background color
}

// Glassmorphism variants
const getGlassmorphismBase = (config: GlassmorphismConfig = {}): StyleObject => {
    const {
        opacity = 0.08,
        blur = 24,
        borderRadius = '1.5rem',
        borderOpacity = 0.15,
        shadowIntensity = 'medium',
        transition = 'all 200ms ease-out',
        backgroundColor
    } = config;

    const shadowMap = {
        light: '0 8px 24px rgba(0, 0, 0, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
        medium: '0 20px 40px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
        heavy: '0 25px 50px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
    };

    return {
        backgroundColor: backgroundColor || `rgba(255, 255, 255, ${opacity})`,
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        border: `1px solid rgba(255, 255, 255, ${borderOpacity})`,
        borderRadius,
        boxShadow: shadowMap[shadowIntensity],
        transition: transition,
    };
};

// Predefined glassmorphism variants
const getGlassmorphismLight = (): StyleObject =>
    getGlassmorphismBase({ opacity: 0.06, blur: 16, shadowIntensity: 'light' });

const getGlassmorphismMedium = (): StyleObject =>
    getGlassmorphismBase({ opacity: 0.08, blur: 24, shadowIntensity: 'medium' });

const getGlassmorphismHeavy = (): StyleObject =>
    getGlassmorphismBase({ opacity: 0.1, blur: 32, shadowIntensity: 'heavy' });

// Interactive glassmorphism states
const getGlassmorphismHover = (config: GlassmorphismConfig = {}): StyleObject => {
    const { hoverIntensity = 'medium', backgroundColor } = config;

    const hoverMap = {
        subtle: {
            backgroundColor: backgroundColor ? `${backgroundColor.replace('40', '60')}` : 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
            transform: 'translateY(-2px)'
        },
        medium: {
            backgroundColor: backgroundColor ? `${backgroundColor.replace('40', '60')}` : 'rgba(255, 255, 255, 0.12)',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            boxShadow: '0 16px 40px rgba(0, 0, 0, 0.18), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
            transform: 'translateY(-4px)'
        },
        strong: {
            backgroundColor: backgroundColor ? `${backgroundColor.replace('40', '60')}` : 'rgba(255, 255, 255, 0.15)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
            transform: 'translateY(-6px)'
        }
    };

    return hoverMap[hoverIntensity];
};

// Specialized glassmorphism components
const getGlassmorphismCard = (): StyleObject => {
    const baseStyles = getGlassmorphismMedium();
    const hoverStyles = getGlassmorphismHover({ hoverIntensity: 'medium' });

    return {
        ...baseStyles,
        transition: 'all 300ms ease-out',
        '&:hover': hoverStyles
    };
};

const getGlassmorphismButton = (variant: 'primary' | 'secondary' = 'primary'): StyleObject => {
    const baseStyles = getGlassmorphismBase({ opacity: 0.08, blur: 12, borderRadius: '0.75rem' });
    const hoverStyles = getGlassmorphismHover({ hoverIntensity: 'subtle' });

    return {
        ...baseStyles,
        transition: 'all 250ms ease-out',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textDecoration: 'none',
        ...(variant === 'primary' ? {
            backgroundColor: 'rgba(37, 99, 235, 0.3)',
            color: '#f1f5f9',
            '&:hover': {
                backgroundColor: 'rgba(37, 99, 235, 0.4)',
                ...hoverStyles
            }
        } : {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            color: '#f1f5f9',
            '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                ...hoverStyles
            }
        })
    };
};

const getGlassmorphismTile = (): StyleObject => {
    const baseStyles = getGlassmorphismBase({ opacity: 0.08, blur: 20, borderRadius: '1.25rem' });
    const hoverStyles = getGlassmorphismHover({ hoverIntensity: 'medium' });

    return {
        ...baseStyles,
        transition: 'all 800ms cubic-bezier(0.4, 0, 0.2, 1)',
        cursor: 'pointer',
        '&:hover': hoverStyles
    };
};

const getGlassmorphismModal = (): StyleObject => ({
    ...getGlassmorphismBase({ opacity: 0.08, blur: 24, borderRadius: '16px' }),
    overflow: 'hidden',
    outline: 'none'
});

const getGlassmorphismInput = (): StyleObject => ({
    ...getGlassmorphismBase({ opacity: 0.08, blur: 20, borderRadius: '8px' }),
    transition: 'all 200ms ease-out',
    '&:focus': {
        backgroundColor: 'rgba(255, 255, 255, 0.12)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow: '0 0 0 3px rgba(37, 99, 235, 0.1)'
    }
});

// Original app styles
const getAppContainerStyles = (): StyleObject => ({
    background:
        'linear-gradient(-45deg, #77528d, #4b3c6e, #2d3a4e, #24354f, #23345a, #364a75)',
    backgroundSize: '200% 200%',
    animation: 'gradient-shift 15s ease infinite',
    minHeight: '100vh',
    width: '100%',
    position: 'relative',
    zIndex: 0,
});

const getPageContainerStyles = (): StyleObject => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'transparent',
});

const getFabStyles = (): StyleObject => {
    const baseStyles = getGlassmorphismBase({ opacity: 0.1, blur: 16, borderRadius: '50%' });
    const hoverStyles = getGlassmorphismHover({ hoverIntensity: 'medium' });

    return {
        position: 'fixed',
        bottom: 24,
        left: 24,
        zIndex: 1300,
        ...baseStyles,
        color: 'rgba(255, 255, 255, 0.9)',
        '&:hover': {
            ...hoverStyles,
            transform: 'translateY(-2px)',
        },
        transition: 'all 0.3s ease-out',
    };
};

const appStyles = {
    // Glassmorphism system
    getGlassmorphismBase,
    getGlassmorphismLight,
    getGlassmorphismMedium,
    getGlassmorphismHeavy,
    getGlassmorphismHover,
    getGlassmorphismCard,
    getGlassmorphismButton,
    getGlassmorphismTile,
    getGlassmorphismModal,
    getGlassmorphismInput,

    // Original app styles
    getAppContainerStyles,
    getPageContainerStyles,
    getFabStyles,
};

export default appStyles;

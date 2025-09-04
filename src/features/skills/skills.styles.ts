import type { SkillCategory, StyleObject } from '../../shared/types';
import appStyles from '../../shared/styles/app.styles';

interface CategoryColors {
    from: string;
    to: string;
}

const getSkillsSectionStyles = (isExpanded: boolean): StyleObject => ({
    minHeight: '100vh',
    position: 'relative',
    overflow: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
    '@media (max-width: 600px)': {
        minHeight: '100vh',
        padding: '1rem',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingTop: isExpanded ? '15vh' : '75%',
        paddingBottom: '2rem',
        transition: 'padding-top 800ms ease',
    },
});

const getSkillsMainContainerStyles = (): StyleObject => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    marginBottom: '1rem',
    '@media (max-width: 600px)': {
        width: '100%',
        maxWidth: '64rem',
        height: '100%',
        justifyContent: 'flex-start',
    },
});

const getCategoryTilesContainerStyles = (
    isExpanded: boolean
): StyleObject => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: isExpanded ? 'translateY(-8vh)' : 'translateY(0)',
    transition: 'transform 800ms cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 2,
    position: 'relative',
    '@media (max-width: 600px)': {
        transform: isExpanded ? 'translateY(-3vh)' : 'translateY(0)',
    },
});

const getCategoryContainerStyles = (): StyleObject => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: {
        xs: 2,
        sm: 3,
        md: 4,
    },
    '@media (max-width: 600px)': {
        flexWrap: 'wrap',
        gap: 2,
        padding: '0 1rem',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '280px',
        margin: '0 auto',
    },
    '@media (max-width: 400px)': {
        gap: 1.5,
        padding: '0 0.5rem',
        maxWidth: '240px',
    },
    '@media (max-width: 320px)': {
        gap: 1,
        padding: '0 0.25rem',
        maxWidth: '200px',
    },
});

const getCategoryTileStyles = (
    category: SkillCategory,
    isExpanded: boolean,
    isSelected: boolean,
    isOtherSelected: boolean
): StyleObject => {
    const colors = getCategoryColors(category.key);

    return {
        position: 'relative',
        cursor: 'pointer',
        width: {
            xs: 100,
            sm: 120,
            md: 144,
        },
        height: {
            xs: 100,
            sm: 120,
            md: 144,
        },
        borderRadius: {
            xs: '1rem',
            sm: '1.25rem',
            md: '1.5rem',
        },
        // Use a flat color for background to allow smooth transitions
        ...appStyles.getGlassmorphismBase({
            opacity: 0.08,
            blur: 20,
            borderOpacity: 0.2,
            shadowIntensity: 'medium',
            backgroundColor: `${colors.from}40`
        }),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(255, 255, 255, 0.95)',
        transform: `scale(${getScale(isExpanded, isSelected, isOtherSelected)})`,
        opacity: getOpacity(isExpanded, isSelected, isOtherSelected),
        transition: 'all 800ms cubic-bezier(0.4, 0, 0.2, 1)',
        outline:
            isSelected && isExpanded
                ? '2px solid rgba(255, 255, 255, 0.4)'
                : 'none',
        WebkitTapHighlightColor: 'transparent',
        userSelect: 'none',
        touchAction: 'manipulation',
        '@media (hover: hover)': {
            ...(isSelected ? {} : {
                '&:hover': {
                    transform: `scale(${getHoverScale(isExpanded, isSelected)})`,
                    ...appStyles.getGlassmorphismHover({
                        hoverIntensity: 'medium',
                        backgroundColor: `${colors.from}40`
                    }),
                    outline: 'none',
                },
            }),
        },
        '&:focus': {
            outline: 'none',
        },
        '&:active': {
            outline: 'none',
        },
        '@media (hover: none)': {
            '&:active': {
                transform: 'scale(1.02)',
                outline: 'none',
            },
        },
    };
};

const getSkillsDisplayAreaStyles = (isExpanded: boolean): StyleObject => ({
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '100%',
    maxWidth: '64rem',
    paddingBottom: isExpanded ? '3rem' : '0',
    opacity: isExpanded ? 1 : 0,
    transform: isExpanded
        ? 'translateX(-50%) translateY(6vh) scale(1)'
        : 'translateX(-50%) translateY(2vh) scale(0.95)',
    pointerEvents: isExpanded ? 'auto' : 'none',
    transition: 'all 800ms cubic-bezier(0.4, 0, 0.2, 1)',
    zIndex: 1,
    '@media (max-width: 600px)': {
        padding: isExpanded ? '0 1rem' : '0',
        paddingBottom: isExpanded ? '3rem' : '0',
        top: '33%',
        transform: isExpanded
            ? 'translateX(-50%) translateY(8vh) scale(1)'
            : 'translateX(-50%) translateY(4vh) scale(0.98)',
    },
});

const getSkillsCardStyles = (): StyleObject => ({
    width: '100%',
    ...appStyles.getGlassmorphismBase({
        opacity: 0.08,
        blur: 24,
        borderOpacity: 0.15,
        shadowIntensity: 'medium'
    }),
    padding: {
        xs: '1.5rem',
        sm: '1.75rem',
        md: '2rem',
    },
});

const getSkillItemStyles = (
    index: number,
    isTransitioning: boolean = false
): StyleObject => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '0.1rem',
    padding: {
        xs: '0.75rem',
        sm: '1rem',
    },
    ...appStyles.getGlassmorphismBase({
        opacity: 0.06,
        blur: 12,
        borderOpacity: 0.1,
        shadowIntensity: 'light'
    }),
    borderRadius: '1rem',
    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    animation: isTransitioning
        ? `skillSlideOut 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms both`
        : `skillSlideIn 600ms cubic-bezier(0.4, 0, 0.2, 1) ${500 + index * 60}ms both`,
    '@media (hover: hover)': {
        '&:hover': {
            ...appStyles.getGlassmorphismHover({ hoverIntensity: 'subtle' }),
            transform: 'scale(1.05) translateY(-2px)',
        },
    },
    '@media (hover: none)': {
        '&:active': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            transform: 'scale(1.02)',
        },
    },
    '@keyframes skillSlideIn': {
        '0%': {
            opacity: 0,
            transform: 'translateY(1.5rem) scale(0.9)',
        },
        '60%': {
            opacity: 0.8,
        },
        '100%': {
            opacity: 1,
            transform: 'translateY(0) scale(1)',
        },
    },
    '@keyframes skillSlideOut': {
        '0%': {
            opacity: 1,
            transform: 'translateY(0) scale(1)',
        },
        '40%': {
            opacity: 0.6,
        },
        '100%': {
            opacity: 0,
            transform: 'translateY(-1rem) scale(0.95)',
        },
    },
});

const getCategoryColors = (categoryKey: string): CategoryColors => {
    const colors: Record<string, CategoryColors> = {
        frameworks: { from: '#3b82f6', to: '#06b6d4' },
        'languagesAndPlatforms': { from: '#10b981', to: '#059669' },
        tools: { from: '#8b5cf6', to: '#7c3aed' },
        other: { from: '#f97316', to: '#ef4444' },
    };
    return colors[categoryKey] || colors.frameworks;
};

const getScale = (
    isExpanded: boolean,
    isSelected: boolean,
    _isOtherSelected: boolean
): number => {
    if (!isExpanded) return 1;
    if (isSelected) return 1.1;
    return 1;
};

const getHoverScale = (isExpanded: boolean, isSelected: boolean): number => {
    if (!isExpanded) return 1.1;
    if (isSelected) return 1.1;
    return 1.05;
};

const getOpacity = (
    isExpanded: boolean,
    isSelected: boolean,
    isOtherSelected: boolean
): number => {
    if (!isExpanded) return 1;
    if (isOtherSelected && !isSelected) return 0.6;
    return 1;
};

const getCategoryIconContainerStyles = (): StyleObject => ({
    mb: 1.5,
    '& svg': {
        width: {
            xs: 28,
            sm: 32,
            md: 32,
        },
        height: {
            xs: 28,
            sm: 32,
            md: 32,
        },
    },
});

const getCategoryLabelStyles = (): StyleObject => ({
    fontWeight: 'bold',
    fontSize: {
        xs: '0.875rem',
        sm: '0.9375rem',
        md: '1rem',
    },
    textAlign: 'center',
    '@media (max-width: 600px)': {
        fontSize: '0.875rem',
        lineHeight: 1.2,
    },
});

const getSkillsTitleStyles = (): StyleObject => ({
    fontSize: {
        xs: '1.25rem',
        sm: '1.375rem',
        md: '1.5rem',
    },
    fontWeight: 'bold',
    color: '#f1f5f9',
    mb: {
        xs: 3,
        sm: 3.5,
        md: 4,
    },
    textAlign: 'center',
});

const getSkillsGridStyles = (): StyleObject => ({
    display: 'grid',
    gridTemplateColumns: {
        xs: 'repeat(2, 1fr)',
        sm: 'repeat(3, 1fr)',
        md: 'repeat(4, 1fr)',
    },
    gap: {
        xs: 2,
        sm: 2.5,
        md: 3,
    },
    maxHeight: {
        xs: 'none',
        sm: 'none',
        md: '30rem',
        lg: '32rem',
    },
    overflow: 'visible',
    '@media (max-width: 600px)': {
        gap: 2,
        maxHeight: 'none',
        padding: '0 0.5rem',
    },
    '@media (max-width: 400px)': {
        gap: 1.5,
        padding: '0 0.25rem',
    },
    '@media (max-width: 320px)': {
        gap: 1,
        padding: '0 0.125rem',
    },
});

const getSkillIconStyles = (): StyleObject => ({
    fontSize: {
        xs: '1.5rem',
        sm: '1.75rem',
        md: '1.875rem',
    },
    width: {
        xs: '1.5rem',
        sm: '1.75rem',
        md: '1.875rem',
    },
    height: {
        xs: '1.5rem',
        sm: '1.75rem',
        md: '1.875rem',
    },
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mb: {
        xs: 1,
        sm: 1.25,
        md: 1.5,
    },
});

const getSkillLabelStyles = (): StyleObject => ({
    color: '#e2e8f0',
    fontWeight: 500,
    textAlign: 'center',
    fontSize: {
        xs: '0.8125rem',
        sm: '0.875rem',
    },
    lineHeight: 1.3,
    '@media (max-width: 600px)': {
        fontSize: '0.8125rem',
        lineHeight: 1.2,
    },
});

const skillsStyles = {
    getSkillsSectionStyles,
    getCategoryTilesContainerStyles,
    getCategoryTileStyles,
    getSkillsDisplayAreaStyles,
    getSkillsCardStyles,
    getSkillItemStyles,
    getCategoryContainerStyles,
    getCategoryIconContainerStyles,
    getCategoryLabelStyles,
    getSkillsTitleStyles,
    getSkillsGridStyles,
    getSkillIconStyles,
    getSkillLabelStyles,
    getSkillsMainContainerStyles,
};

export default skillsStyles;

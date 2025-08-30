import type { SxProps, Theme } from '@mui/material';
import type { SkillCategory } from '../../shared/types';

interface CategoryColors {
    from: string;
    to: string;
}

const getSkillsSectionStyles = (isExpanded: boolean): SxProps<Theme> => ({
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

const getSkillsMainContainerStyles = (): SxProps<Theme> => ({
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
): SxProps<Theme> => ({
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

const getCategoryContainerStyles = (): SxProps<Theme> => ({
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
): SxProps<Theme> => {
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
        background: `linear-gradient(135deg, ${colors.from}40, ${colors.to}40)`,
        backdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'rgba(255, 255, 255, 0.95)',
        boxShadow:
            '0 8px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
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
            '&:hover': {
                background: `linear-gradient(135deg, ${colors.from}60, ${colors.to}60)`,
                transform: `scale(${getHoverScale(isExpanded, isSelected)})`,
                boxShadow:
                    '0 12px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                outline: 'none',
            },
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

const getSkillsDisplayAreaStyles = (isExpanded: boolean): SxProps<Theme> => ({
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

const getSkillsCardStyles = (): SxProps<Theme> => ({
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(24px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: {
        xs: '1.5rem',
        sm: '1.75rem',
        md: '2rem',
    },
    padding: {
        xs: '1.5rem',
        sm: '1.75rem',
        md: '2rem',
    },
    boxShadow:
        '0 20px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
});

const getSkillItemStyles = (
    index: number,
    isTransitioning: boolean = false
): SxProps<Theme> => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: {
        xs: '0.75rem',
        sm: '1rem',
    },
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: {
        xs: '0.75rem',
        sm: '1rem',
    },
    boxShadow:
        '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
    animation: isTransitioning
        ? `skillSlideOut 150ms cubic-bezier(0.4, 0, 0.2, 1) ${index * 15}ms both`
        : `skillSlideIn 600ms cubic-bezier(0.4, 0, 0.2, 1) ${500 + index * 60}ms both`,
    '@media (hover: hover)': {
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            transform: 'scale(1.05) translateY(-2px)',
            boxShadow:
                '0 8px 24px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
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
        frontend: { from: '#3b82f6', to: '#06b6d4' },
        backend: { from: '#10b981', to: '#059669' },
        tools: { from: '#8b5cf6', to: '#7c3aed' },
        other: { from: '#f97316', to: '#ef4444' },
    };
    return colors[categoryKey] || colors.frontend;
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

const getCategoryIconContainerStyles = (): SxProps<Theme> => ({
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

const getCategoryLabelStyles = (): SxProps<Theme> => ({
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

const getSkillsTitleStyles = (): SxProps<Theme> => ({
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

const getSkillsGridStyles = (): SxProps<Theme> => ({
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

const getSkillIconStyles = (): SxProps<Theme> => ({
    fontSize: {
        xs: '1.5rem',
        sm: '1.75rem',
        md: '1.875rem',
    },
    mb: {
        xs: 1,
        sm: 1.25,
        md: 1.5,
    },
});

const getSkillLabelStyles = (): SxProps<Theme> => ({
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

import type { SxProps, Theme } from '@mui/material';
import type { SkillCategory } from '../../shared/types';

interface CategoryColors {
    from: string;
    to: string;
}

const getSkillsSectionStyles = (): SxProps<Theme> => ({
    height: '100vh',
    position: 'relative',
    overflow: 'hidden',
});

const getCategoryTilesContainerStyles = (
    isExpanded: boolean
): SxProps<Theme> => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transform: isExpanded ? 'translateY(-12rem)' : 'translateY(0)',
    transition: 'all 500ms ease',
    zIndex: 10,
    pointerEvents: 'auto',
});

const getCategoryTileStyles = (
    category: SkillCategory,
    isExpanded: boolean,
    isSelected: boolean,
    isOtherSelected: boolean
): SxProps<Theme> => {
    const baseSize = isExpanded ? 112 : 144;
    const colors = getCategoryColors(category.key);

    return {
        position: 'relative',
        cursor: 'pointer',
        width: baseSize,
        height: baseSize,
        borderRadius: '1.5rem',
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
        transform: `scale(${getScale(isExpanded, isSelected, isOtherSelected)}) translateY(${getTranslateY(isExpanded)})`,
        opacity: getOpacity(isExpanded, isSelected, isOtherSelected),
        transition: 'all 1s ease-out',
        outline:
            isSelected && isExpanded
                ? '2px solid rgba(255, 255, 255, 0.4)'
                : 'none',
        '&:hover': {
            background: `linear-gradient(135deg, ${colors.from}60, ${colors.to}60)`,
            transform: `scale(${getHoverScale(isExpanded, isSelected)}) translateY(${getHoverTranslateY(isExpanded)})`,
            boxShadow:
                '0 12px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
        },
    };
};

const getSkillsDisplayAreaStyles = (isExpanded: boolean): SxProps<Theme> => ({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingBottom: '2rem',
    paddingX: '2rem',
    opacity: isExpanded ? 1 : 0,
    transform: isExpanded ? 'translateY(0)' : 'translateY(100%)',
    pointerEvents: isExpanded ? 'auto' : 'none',
    transition: 'all 1s ease',
    transitionDelay: '300ms',
    zIndex: 1,
});

const getSkillsCardStyles = (): SxProps<Theme> => ({
    width: '100%',
    maxWidth: '64rem',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(24px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '2rem',
    padding: '2rem',
    boxShadow:
        '0 20px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
});

const getSkillItemStyles = (index: number): SxProps<Theme> => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '1rem',
    boxShadow:
        '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    transition: 'all 300ms ease-out',
    animation: `skillSlideIn 600ms ease ${index * 75}ms both`,
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        transform: 'scale(1.05) translateY(-2px)',
        boxShadow:
            '0 8px 24px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
    },
    '@keyframes skillSlideIn': {
        from: {
            opacity: 0,
            transform: 'translateY(1rem)',
        },
        to: {
            opacity: 1,
            transform: 'translateY(0)',
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

const getTranslateY = (_isExpanded: boolean): string => {
    return '0';
};

const getHoverTranslateY = (isExpanded: boolean): string => {
    return isExpanded ? '0' : '-0.5rem';
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

const getSkillsMainContainerStyles = (): SxProps<Theme> => ({
    height: '100%',
    position: 'relative',
});

const getCategoryContainerStyles = (): SxProps<Theme> => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
});

const getCategoryIconContainerStyles = (
    isExpanded: boolean
): SxProps<Theme> => ({
    mb: isExpanded ? 1 : 1.5,
});

const getCategoryLabelStyles = (isExpanded: boolean): SxProps<Theme> => ({
    fontWeight: 'bold',
    fontSize: isExpanded ? '0.875rem' : '1rem',
});

const getSkillsTitleStyles = (): SxProps<Theme> => ({
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#f1f5f9',
    mb: 4,
    textAlign: 'center',
});

const getSkillsGridStyles = (): SxProps<Theme> => ({
    display: 'grid',
    gridTemplateColumns: {
        xs: 'repeat(2, 1fr)',
        sm: 'repeat(3, 1fr)',
        md: 'repeat(4, 1fr)',
    },
    gap: 3,
    maxHeight: '24rem',
    overflow: 'visible',
});

const getSkillIconStyles = (): SxProps<Theme> => ({
    fontSize: '1.875rem',
    mb: 1.5,
});

const getSkillLabelStyles = (): SxProps<Theme> => ({
    color: '#e2e8f0',
    fontWeight: 500,
    textAlign: 'center',
    fontSize: '0.875rem',
});

const skillsStyles = {
    getSkillsSectionStyles,
    getCategoryTilesContainerStyles,
    getCategoryTileStyles,
    getSkillsDisplayAreaStyles,
    getSkillsCardStyles,
    getSkillItemStyles,
    getSkillsMainContainerStyles,
    getCategoryContainerStyles,
    getCategoryIconContainerStyles,
    getCategoryLabelStyles,
    getSkillsTitleStyles,
    getSkillsGridStyles,
    getSkillIconStyles,
    getSkillLabelStyles,
};

export default skillsStyles;

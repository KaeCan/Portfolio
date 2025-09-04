import type { SxProps, Theme } from '@mui/material';
import type { StyleObject } from '../../shared/types';
import appStyles from '../../shared/styles/app.styles';

const getProjectsSectionStyles = (): StyleObject => ({
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflowY: 'auto',
    paddingY: { xs: 4, md: 6 },
});

const getProjectsContainerStyles = (): StyleObject => ({
    maxWidth: '96rem',
    mx: 'auto',
    px: 2,
});

const getProjectCardStyles = (isHovered = false): StyleObject => ({
    ...(appStyles.getGlassmorphismBase({
        opacity: 0.08,
        blur: 24,
        borderRadius: '1.5rem',
        borderOpacity: 0.15,
        shadowIntensity: 'medium'
    }) as SxProps<Theme>),
    overflow: 'hidden',
    transform: isHovered ? 'translateY(-0.5rem)' : 'translateY(0)',
    transition: 'all 300ms ease-out',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
        ...(appStyles.getGlassmorphismHover({ hoverIntensity: 'medium' }) as SxProps<Theme>),
        transform: 'translateY(-0.75rem)',
    },
});

const getProjectImageStyles = (): StyleObject => ({
    height: 192,
    backgroundColor: '#374151',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const getProjectContentStyles = (): StyleObject => ({
    p: 3,
    flexGrow: 1,
});

const getProjectTitleStyles = (): StyleObject => ({
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#f1f5f9',
    mb: 1.5,
});

const getProjectDescriptionStyles = (): StyleObject => ({
    color: '#cbd5e1',
    mb: 2,
    lineHeight: 1.6,
});

const getProjectTechStyles = (): StyleObject => ({
    px: 1.5,
    py: 0.5,
    backgroundColor: '#374151',
    color: '#cbd5e1',
    fontSize: '0.875rem',
    fontWeight: 500,
    borderRadius: '9999px',
});

const getProjectActionsStyles = (): StyleObject => ({
    p: 3,
    pt: 0,
    display: 'flex',
    gap: 2,
});

const getProjectButtonStyles = (
    variant: 'primary' | 'secondary' = 'primary',
    _isSingleButton: boolean = false
): StyleObject => ({
    flex: 1, // Always use flex: 1 so single buttons span full width
    textAlign: 'center',
    py: 1.5,
    px: 2,
    fontWeight: 500,
    gap: 1,
    ...(appStyles.getGlassmorphismButton(variant) as SxProps<Theme>),
    borderRadius: '0.5rem',
});

const getGithubButtonStyles = (): StyleObject => ({
    display: 'inline-flex',
    alignItems: 'center',
    px: 4,
    py: 2,
    fontWeight: 600,
    color: 'rgba(255, 255, 255, 0.9)',
    textDecoration: 'none',
    ...(appStyles.getGlassmorphismBase({
        opacity: 0.1,
        blur: 20,
        borderRadius: '0.75rem',
        borderOpacity: 0.2,
        shadowIntensity: 'medium'
    }) as SxProps<Theme>),
    '&:hover': {
        ...(appStyles.getGlassmorphismHover({ hoverIntensity: 'medium' }) as SxProps<Theme>),
        transform: 'translateY(-0.5rem)',
    },
});

const getProjectsGridStyles = (): StyleObject => ({
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
    gap: 4,
    maxWidth: '96rem',
    mx: 'auto',
});

const getProjectEmojiStyles = (): StyleObject => ({
    color: '#94a3b8',
    fontSize: '3rem',
});

const getTechWrapperStyles = (): StyleObject => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: 1,
    mb: 2.5,
});

const getGithubCenterStyles = (): StyleObject => ({
    textAlign: 'center',
    mt: 6,
});

const getGithubTextStyles = (): StyleObject => ({
    ml: 1.5,
});

const projectsStyles = {
    getProjectsSectionStyles,
    getProjectsContainerStyles,
    getProjectsGridStyles,
    getProjectCardStyles,
    getProjectImageStyles,
    getProjectEmojiStyles,
    getProjectContentStyles,
    getProjectTitleStyles,
    getProjectDescriptionStyles,
    getTechWrapperStyles,
    getProjectTechStyles,
    getProjectActionsStyles,
    getProjectButtonStyles,
    getGithubButtonStyles,
    getGithubCenterStyles,
    getGithubTextStyles,
};

export default projectsStyles;

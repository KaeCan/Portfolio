import type { SxProps, Theme } from '@mui/material';

const getProjectsSectionStyles = (): SxProps<Theme> => ({
    height: '100vh',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    overflowY: 'auto',
    paddingY: { xs: 4, md: 6 },
});

const getProjectsContainerStyles = (): SxProps<Theme> => ({
    maxWidth: '96rem',
    mx: 'auto',
    px: 2,
});

const getProjectCardStyles = (isHovered = false): SxProps<Theme> => ({
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(24px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '1.5rem',
    overflow: 'hidden',
    boxShadow:
        '0 20px 40px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    transform: isHovered ? 'translateY(-0.5rem)' : 'translateY(0)',
    transition: 'all 300ms ease-out',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow:
            '0 25px 50px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        transform: 'translateY(-0.75rem)',
    },
});

const getProjectImageStyles = (): SxProps<Theme> => ({
    height: 192,
    backgroundColor: '#374151',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const getProjectContentStyles = (): SxProps<Theme> => ({
    p: 3,
    flexGrow: 1,
});

const getProjectTitleStyles = (): SxProps<Theme> => ({
    fontSize: '1.25rem',
    fontWeight: 'bold',
    color: '#f1f5f9',
    mb: 1.5,
});

const getProjectDescriptionStyles = (): SxProps<Theme> => ({
    color: '#cbd5e1',
    mb: 2,
    lineHeight: 1.6,
});

const getProjectTechStyles = (): SxProps<Theme> => ({
    px: 1.5,
    py: 0.5,
    backgroundColor: '#374151',
    color: '#cbd5e1',
    fontSize: '0.875rem',
    fontWeight: 500,
    borderRadius: '9999px',
});

const getProjectActionsStyles = (): SxProps<Theme> => ({
    p: 3,
    pt: 0,
    display: 'flex',
    gap: 2,
});

const getProjectButtonStyles = (
    variant: 'primary' | 'secondary' = 'primary'
): SxProps<Theme> => ({
    flex: 1,
    textAlign: 'center',
    py: 1.5,
    px: 2,
    borderRadius: '0.75rem',
    fontWeight: 500,
    transition: 'all 250ms ease-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
    textDecoration: 'none',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow:
        '0 4px 16px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    ...(variant === 'primary'
        ? {
              backgroundColor: 'rgba(37, 99, 235, 0.3)',
              color: '#f1f5f9',
              '&:hover': {
                  backgroundColor: 'rgba(37, 99, 235, 0.4)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  transform: 'translateY(-1px)',
                  boxShadow:
                      '0 6px 20px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              },
          }
        : {
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              color: '#f1f5f9',
              '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.12)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  transform: 'translateY(-1px)',
                  boxShadow:
                      '0 6px 20px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              },
          }),
});

const getGithubButtonStyles = (): SxProps<Theme> => ({
    display: 'inline-flex',
    alignItems: 'center',
    px: 4,
    py: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: 600,
    borderRadius: '0.75rem',
    boxShadow:
        '0 8px 32px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    transform: 'translateY(0)',
    transition: 'all 300ms ease-out',
    textDecoration: 'none',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.15)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        boxShadow:
            '0 12px 40px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
        transform: 'translateY(-0.5rem)',
    },
});

const getProjectsGridStyles = (): SxProps<Theme> => ({
    display: 'grid',
    gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
    gap: 4,
    maxWidth: '96rem',
    mx: 'auto',
});

const getProjectEmojiStyles = (): SxProps<Theme> => ({
    color: '#94a3b8',
    fontSize: '3rem',
});

const getTechWrapperStyles = (): SxProps<Theme> => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: 1,
    mb: 2.5,
});

const getGithubCenterStyles = (): SxProps<Theme> => ({
    textAlign: 'center',
    mt: 6,
});

const getGithubTextStyles = (): SxProps<Theme> => ({
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

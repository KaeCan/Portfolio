import type { SxProps, Theme } from '@mui/material';
import type React from 'react';

const getModalStyles = (): SxProps<Theme> => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

const getBackdropStyles = (): {
    timeout: number;
    sx: Record<string, string>;
} => ({
    timeout: 300,
    sx: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(4px)',
    },
});

const getCommandPaletteContainerStyles = (): SxProps<Theme> => ({
    width: '100%',
    maxWidth: '640px',
    mx: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(24px)',
    WebkitBackdropFilter: 'blur(24px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '16px',
    boxShadow:
        '0 20px 40px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    overflow: 'hidden',
    outline: 'none',
});

const getSearchInputContainerStyles = (): SxProps<Theme> => ({
    borderBottom: '1px solid rgba(255, 255, 255, 0.15)',
});

const getSearchInputStyles = (): React.CSSProperties => ({
    width: '100%',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    color: 'rgba(255, 255, 255, 0.9)',
    fontSize: '16px',
    padding: '16px 20px',
    fontFamily: 'inherit',
});

const getSearchInputPlaceholderStyles = (): string => `
  input::placeholder {
    color: rgba(255, 255, 255, 0.5);
  }
`;

const getResultsContainerStyles = (): SxProps<Theme> => ({
    maxHeight: '400px',
    overflowY: 'auto',
    py: 1,
});

const getNoResultsContainerStyles = (): SxProps<Theme> => ({
    px: 2.5,
    py: 4,
    textAlign: 'center',
});

const getNoResultsTextStyles = (): SxProps<Theme> => ({
    color: 'rgba(255, 255, 255, 0.6)',
});

const getGroupContainerStyles = (): SxProps<Theme> => ({
    mb: 1,
});

const getGroupHeadingStyles = (): SxProps<Theme> => ({
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    px: 2.5,
    py: 1,
    display: 'block',
});

const getCommandItemStyles = (isSelected: boolean): SxProps<Theme> => ({
    display: 'flex',
    alignItems: 'center',
    gap: 1.5,
    px: 2.5,
    py: 1.5,
    mx: 1,
    borderRadius: '8px',
    cursor: 'pointer',
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '14px',
    ...(isSelected && {
        backgroundColor: 'rgba(37, 99, 235, 0.3)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        color: 'rgba(255, 255, 255, 0.95)',
        boxShadow:
            '0 6px 20px rgba(37, 99, 235, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
    }),
});

const getCommandItemTextStyles = (): SxProps<Theme> => ({
    fontSize: 'inherit',
    color: 'inherit',
});

const getCommandItemBadgeStyles = (): SxProps<Theme> => ({
    ml: 'auto',
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '12px',
});

const getFooterStyles = (): SxProps<Theme> => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '0.75rem',
    color: 'rgba(255, 255, 255, 0.6)',
    px: 2,
    py: 1,
    borderTop: '1px solid rgba(255, 255, 255, 0.15)',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    backdropFilter: 'blur(8px)',
});

const getFooterControlsStyles = (): SxProps<Theme> => ({
    display: 'flex',
    alignItems: 'center',
    gap: 2,
});

const getFooterControlItemStyles = (): SxProps<Theme> => ({
    display: 'flex',
    alignItems: 'center',
    gap: 0.5,
});

const getKbdStyles = (): SxProps<Theme> => ({
    px: 0.75,
    py: 0.25,
    fontSize: '0.75rem',
    fontWeight: 600,
    color: 'rgba(255, 255, 255, 0.9)',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    backdropFilter: 'blur(8px)',
    border: '1px solid rgba(255, 255, 255, 0.15)',
    borderRadius: '0.375rem',
    boxShadow:
        '0 2px 8px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
    fontFamily:
        'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
});

const getFooterBrandStyles = (): SxProps<Theme> => ({
    color: 'rgba(255, 255, 255, 0.6)',
});

const commandPaletteStyles = {
    getModalStyles,
    getBackdropStyles,
    getCommandPaletteContainerStyles,
    getSearchInputContainerStyles,
    getSearchInputStyles,
    getSearchInputPlaceholderStyles,
    getResultsContainerStyles,
    getNoResultsContainerStyles,
    getNoResultsTextStyles,
    getGroupContainerStyles,
    getGroupHeadingStyles,
    getCommandItemStyles,
    getCommandItemTextStyles,
    getCommandItemBadgeStyles,
    getFooterStyles,
    getFooterControlsStyles,
    getFooterControlItemStyles,
    getKbdStyles,
    getFooterBrandStyles,
};

export default commandPaletteStyles;

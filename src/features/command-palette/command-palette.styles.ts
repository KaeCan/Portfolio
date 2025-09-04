import type React from 'react';
import type { StyleObject } from '../../shared/types';
import appStyles from '../../shared/styles/app.styles';

const getModalStyles = (): StyleObject => ({
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

const getCommandPaletteContainerStyles = (): StyleObject => ({
    width: '100%',
    maxWidth: '640px',
    mx: 2,
    ...appStyles.getGlassmorphismModal(),
});

const getSearchInputContainerStyles = (): StyleObject => ({
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

const getResultsContainerStyles = (): StyleObject => ({
    maxHeight: '400px',
    overflowY: 'auto',
    py: 1,
});

const getNoResultsContainerStyles = (): StyleObject => ({
    px: 2.5,
    py: 4,
    textAlign: 'center',
});

const getNoResultsTextStyles = (): StyleObject => ({
    color: 'rgba(255, 255, 255, 0.6)',
});

const getGroupContainerStyles = (): StyleObject => ({
    mb: 1,
});

const getGroupHeadingStyles = (): StyleObject => ({
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    px: 2.5,
    py: 1,
    display: 'block',
});

const getCommandItemStyles = (isSelected: boolean): StyleObject => ({
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
        ...appStyles.getGlassmorphismBase({
            opacity: 0.3,
            blur: 16,
            borderRadius: '8px',
            borderOpacity: 0.2,
            shadowIntensity: 'light'
        }),
        color: 'rgba(255, 255, 255, 0.95)',
        boxShadow:
            '0 6px 20px rgba(37, 99, 235, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
    }),
});

const getCommandItemTextStyles = (): StyleObject => ({
    fontSize: 'inherit',
    color: 'inherit',
});

const getCommandItemBadgeStyles = (): StyleObject => ({
    ml: 'auto',
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: '12px',
});

const getFooterStyles = (): StyleObject => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontSize: '0.75rem',
    color: 'rgba(255, 255, 255, 0.6)',
    px: 2,
    py: 1,
    borderTop: '1px solid rgba(255, 255, 255, 0.15)',
    ...appStyles.getGlassmorphismBase({
        opacity: 0.02,
        blur: 8,
        borderRadius: 0,
        borderOpacity: 0,
        shadowIntensity: 'light'
    }),
});

const getFooterControlsStyles = (): StyleObject => ({
    display: 'flex',
    alignItems: 'center',
    gap: 2,
});

const getFooterControlItemStyles = (): StyleObject => ({
    display: 'flex',
    alignItems: 'center',
    gap: 0.5,
});

const getKbdStyles = (): StyleObject => ({
    px: 0.75,
    py: 0.25,
    fontSize: '0.75rem',
    fontWeight: 600,
    color: 'rgba(255, 255, 255, 0.9)',
    ...appStyles.getGlassmorphismBase({
        opacity: 0.08,
        blur: 8,
        borderRadius: '0.375rem',
        borderOpacity: 0.15,
        shadowIntensity: 'light'
    }),
    fontFamily:
        'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
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
};

export default commandPaletteStyles;

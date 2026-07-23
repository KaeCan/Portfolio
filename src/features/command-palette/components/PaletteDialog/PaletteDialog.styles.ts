import { css, styled } from '@pigment-css/react';

export const Overlay = styled('div')({
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 1400,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
});

export const Backdrop = styled('button')({
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    border: 'none',
    padding: 0,
    margin: 0,
    cursor: 'pointer',
    backgroundColor: 'var(--color-overlay-transparent)',
    WebkitBackdropFilter: 'none',
    backdropFilter: 'none',
    transition: 'background-color 300ms ease, backdrop-filter 300ms ease',
});

export const backdropOpen = css({
    backgroundColor: 'var(--color-overlay)',
    WebkitBackdropFilter: 'blur(4px)',
    backdropFilter: 'blur(4px)',
});

export const Panel = styled('div')({
    position: 'relative',
    zIndex: 1,
    width: '100%',
    maxWidth: '640px',
    backgroundColor: 'var(--glass-bg)',
    WebkitBackdropFilter: 'none',
    backdropFilter: 'none',
    border: '1px solid var(--glass-border)',
    borderRadius: '16px',
    boxShadow: 'var(--shadow-glass)',
    outline: 'none',
    opacity: 0,
    transform: 'translateY(4px)',
    transition:
        'opacity 300ms ease, transform 300ms ease, backdrop-filter 300ms ease',
});

export const panelOpen = css({
    WebkitBackdropFilter: 'blur(24px)',
    backdropFilter: 'blur(24px)',
    opacity: 1,
    transform: 'translateY(0)',
});

export const PanelClip = styled('div')({
    overflow: 'hidden',
    borderRadius: '16px',
});

import { styled } from '@pigment-css/react';

export const Glass = styled('div')({
    backgroundColor: 'var(--glass-bg)',
    backdropFilter: 'blur(var(--glass-blur))',
    WebkitBackdropFilter: 'blur(var(--glass-blur))',
    border: '1px solid var(--glass-border)',
    borderRadius: '1.5rem',
    boxShadow: 'var(--shadow-glass)',
});

export const GlassLight = styled('div')({
    backgroundColor: 'var(--glass-bg-light)',
    backdropFilter: 'blur(var(--glass-blur-sm))',
    WebkitBackdropFilter: 'blur(var(--glass-blur-sm))',
    border: '1px solid var(--glass-border-subtle)',
    borderRadius: '1rem',
    boxShadow: 'var(--shadow-glass-sm)',
});

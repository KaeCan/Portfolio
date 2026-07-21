import type { JSX, ReactNode } from 'react';
import {
    Backdrop,
    Overlay,
    Panel,
    backdropOpen,
    panelOpen,
} from './PaletteDialog.styles';

interface Props {
    isVisible: boolean;
    onClose: () => void;
    children: ReactNode;
}

export function PaletteDialog({
    isVisible,
    onClose,
    children,
}: Props): JSX.Element {
    return (
        <Overlay>
            <Backdrop
                type="button"
                className={isVisible ? backdropOpen : undefined}
                aria-label="Close command palette"
                onClick={onClose}
            />
            <Panel
                className={isVisible ? panelOpen : undefined}
                role="dialog"
                aria-modal="true"
                aria-label="Command palette"
            >
                {children}
            </Panel>
        </Overlay>
    );
}

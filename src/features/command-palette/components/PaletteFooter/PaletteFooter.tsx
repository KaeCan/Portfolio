import type { JSX } from 'react';
import { Kbd } from '@/components/ui/shared/Kbd.styles';
import type { PaletteView } from '../../types';
import { Footer, Hint } from './PaletteFooter.styles';

interface Props {
    view: PaletteView;
}

export function PaletteFooter({ view }: Props): JSX.Element {
    return (
        <Footer>
            <Hint>
                <Kbd>↑↓</Kbd> to navigate
            </Hint>
            <Hint>
                <Kbd>↵</Kbd> to select
            </Hint>
            <Hint>
                <Kbd>esc</Kbd> {view === 'themes' ? 'to go back' : 'to close'}
            </Hint>
        </Footer>
    );
}

import type { JSX } from 'react';
import { Kbd } from '@/components/ui/shared/Kbd.styles';
import { Footer, Hint } from './PaletteFooter.styles';

export function PaletteFooter(): JSX.Element {
    return (
        <Footer>
            <Hint>
                <Kbd>↑↓</Kbd> to navigate
            </Hint>
            <Hint>
                <Kbd>↵</Kbd> to select
            </Hint>
            <Hint>
                <Kbd>esc</Kbd> to close
            </Hint>
        </Footer>
    );
}

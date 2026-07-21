import type { JSX } from 'react';
import { Glass } from '@/components/ui/shared/Glass.styles';
import { Kbd } from '@/components/ui/shared/Kbd.styles';
import { Hint, Kbds, Wrap } from './HeroHint.styles';

export function HeroHint(): JSX.Element {
    return (
        <Wrap>
            <Glass>
                <Hint>
                    <Kbds>
                        <Kbd data-mod-key>Ctrl</Kbd>
                        <Kbd>K</Kbd>
                    </Kbds>
                    <span>or tap the menu button to navigate</span>
                </Hint>
            </Glass>
        </Wrap>
    );
}

import type { JSX } from 'react';
import { Icon } from '@/components/ui/shared/Icon';
import { Fab } from './MenuFab.styles';

interface Props {
    onOpen: () => void;
}

export function MenuFab({ onOpen }: Props): JSX.Element {
    return (
        <Fab type="button" aria-label="Open command palette" onClick={onOpen}>
            <Icon name="menu" size={24} />
        </Fab>
    );
}

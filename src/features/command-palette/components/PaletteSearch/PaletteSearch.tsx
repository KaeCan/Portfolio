import type { JSX, RefObject } from 'react';
import type { PaletteView } from '../../types';
import { Input, Wrap } from './PaletteSearch.styles';

interface Props {
    view: PaletteView;
    inputRef: RefObject<HTMLInputElement>;
    value: string;
    onChange: (value: string) => void;
}

const PLACEHOLDERS: Record<PaletteView, string> = {
    commands: 'Search for commands, sections, or actions...',
    themes: 'Search themes…',
};

export function PaletteSearch({
    view,
    inputRef,
    value,
    onChange,
}: Props): JSX.Element {
    return (
        <Wrap>
            <Input
                ref={inputRef}
                type="text"
                placeholder={PLACEHOLDERS[view]}
                value={value}
                onChange={(e): void => onChange(e.target.value)}
            />
        </Wrap>
    );
}

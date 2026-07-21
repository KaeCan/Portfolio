import type { JSX, RefObject } from 'react';
import { Input, Wrap } from './PaletteSearch.styles';

interface Props {
    inputRef: RefObject<HTMLInputElement>;
    value: string;
    onChange: (value: string) => void;
}

export function PaletteSearch({
    inputRef,
    value,
    onChange,
}: Props): JSX.Element {
    return (
        <Wrap>
            <Input
                ref={inputRef}
                type="text"
                placeholder="Search for commands, sections, or actions..."
                value={value}
                onChange={(e): void => onChange(e.target.value)}
            />
        </Wrap>
    );
}

import type { JSX, RefObject } from 'react';
import type { ThemePaletteItem } from '../../types';
import {
    Empty,
    Group,
    GroupHeading,
    Item,
    Results,
    itemSelected,
} from '../PaletteResults/PaletteResults.styles';
import { Swatch, SwatchRow, ThemeLabel } from './PaletteThemeResults.styles';

interface Props {
    items: ThemePaletteItem[];
    search: string;
    selectedIndex: number;
    listRef: RefObject<HTMLDivElement>;
    onSelectItem: (item: ThemePaletteItem) => void;
    onHoverIndex: (index: number) => void;
}

export function PaletteThemeResults({
    items,
    search,
    selectedIndex,
    listRef,
    onSelectItem,
    onHoverIndex,
}: Props): JSX.Element {
    return (
        <Results ref={listRef}>
            {items.length > 0 ? (
                <Group>
                    <GroupHeading>Themes</GroupHeading>
                    {items.map((item, index) => {
                        const isSelected = index === selectedIndex;

                        return (
                            <Item
                                key={item.id}
                                type="button"
                                data-item-index={index}
                                className={
                                    isSelected ? itemSelected : undefined
                                }
                                onClick={(): void => onSelectItem(item)}
                                onMouseEnter={(): void => onHoverIndex(index)}
                            >
                                <ThemeLabel>
                                    <span>{item.label}</span>
                                    {item.isActive && <span>✓</span>}
                                </ThemeLabel>
                                <SwatchRow aria-hidden>
                                    {item.swatches.map((color, swatchIndex) => (
                                        <Swatch
                                            key={`${item.id}-${swatchIndex}`}
                                            style={{ backgroundColor: color }}
                                        />
                                    ))}
                                </SwatchRow>
                            </Item>
                        );
                    })}
                </Group>
            ) : (
                <Empty>No themes found for &quot;{search}&quot;</Empty>
            )}
        </Results>
    );
}

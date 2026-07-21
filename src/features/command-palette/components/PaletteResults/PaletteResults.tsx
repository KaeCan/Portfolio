import type { JSX, RefObject } from 'react';
import { Icon } from '@/components/ui/shared/Icon';
import type { FlatPaletteItem, PaletteGroup } from '../../types';
import {
    Badge,
    Empty,
    Group,
    GroupHeading,
    Item,
    Results,
    itemSelected,
} from './PaletteResults.styles';

interface Props {
    groups: PaletteGroup[];
    search: string;
    selectedIndex: number;
    listRef: RefObject<HTMLDivElement>;
    onSelectItem: (item: FlatPaletteItem) => void;
    onHoverIndex: (index: number) => void;
}

export function PaletteResults({
    groups,
    search,
    selectedIndex,
    listRef,
    onSelectItem,
    onHoverIndex,
}: Props): JSX.Element {
    let itemIndex = 0;

    return (
        <Results ref={listRef}>
            {groups.length > 0 ? (
                groups.map(group => (
                    <Group key={group.id}>
                        <GroupHeading>{group.heading}</GroupHeading>
                        {group.items.map(item => {
                            const index = itemIndex++;
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
                                    onMouseEnter={(): void =>
                                        onHoverIndex(index)
                                    }
                                >
                                    <Icon name={item.icon} />
                                    <span>{item.label}</span>
                                    {item.badge && <Badge>{item.badge}</Badge>}
                                </Item>
                            );
                        })}
                    </Group>
                ))
            ) : (
                <Empty>No results found for &quot;{search}&quot;</Empty>
            )}
        </Results>
    );
}

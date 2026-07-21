import type { JSX } from 'react';
import { MenuFab } from './components/MenuFab/MenuFab';
import { PaletteDialog } from './components/PaletteDialog/PaletteDialog';
import { PaletteFooter } from './components/PaletteFooter/PaletteFooter';
import { PaletteResults } from './components/PaletteResults/PaletteResults';
import { PaletteSearch } from './components/PaletteSearch/PaletteSearch';
import { useCommandPalette } from './hooks/useCommandPalette';
import type { PaletteCommands } from './types';

interface Props {
    commands: PaletteCommands;
    currentPath: string;
}

export function CommandPalette({ commands, currentPath }: Props): JSX.Element {
    const palette = useCommandPalette({ commands, currentPath });

    return (
        <>
            <MenuFab onOpen={palette.open} />

            {palette.isMounted && (
                <PaletteDialog
                    isVisible={palette.isVisible}
                    onClose={palette.close}
                >
                    <PaletteSearch
                        inputRef={palette.inputRef}
                        value={palette.search}
                        onChange={palette.setSearch}
                    />
                    <PaletteResults
                        groups={palette.filteredGroups}
                        search={palette.search}
                        selectedIndex={palette.selectedIndex}
                        listRef={palette.listRef}
                        onSelectItem={palette.runItem}
                        onHoverIndex={palette.setSelectedIndex}
                    />
                    <PaletteFooter />
                </PaletteDialog>
            )}
        </>
    );
}

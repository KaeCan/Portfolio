import type { JSX } from 'react';
import { useDownloadResume } from '@/features/resume/hooks/useDownloadResume';
import type { ResumeData } from '@/features/resume/types';
import { MenuFab } from './components/MenuFab/MenuFab';
import { PaletteDialog } from './components/PaletteDialog/PaletteDialog';
import { PaletteFooter } from './components/PaletteFooter/PaletteFooter';
import { PaletteResults } from './components/PaletteResults/PaletteResults';
import { PaletteSearch } from './components/PaletteSearch/PaletteSearch';
import { PaletteThemeResults } from './components/PaletteThemeResults/PaletteThemeResults';
import { useCommandPalette } from './hooks/useCommandPalette';
import type { PaletteCommands } from './types';

interface Props {
    commands: PaletteCommands;
    currentPath: string;
    resumeData: ResumeData;
}

export function CommandPalette({
    commands,
    currentPath,
    resumeData,
}: Props): JSX.Element {
    const { downloadResume } = useDownloadResume(resumeData);
    const palette = useCommandPalette({
        commands,
        currentPath,
        onDownloadResume: downloadResume,
    });

    return (
        <>
            <MenuFab onOpen={palette.open} />

            {palette.isMounted && (
                <PaletteDialog
                    isVisible={palette.isVisible}
                    onClose={palette.close}
                >
                    <PaletteSearch
                        view={palette.view}
                        inputRef={palette.inputRef}
                        value={palette.search}
                        onChange={palette.setSearch}
                    />
                    {palette.view === 'themes' ? (
                        <PaletteThemeResults
                            items={palette.themeItems}
                            search={palette.search}
                            selectedIndex={palette.selectedIndex}
                            listRef={palette.listRef}
                            onSelectItem={palette.runThemeItem}
                            onHoverIndex={palette.setSelectedIndex}
                        />
                    ) : (
                        <PaletteResults
                            groups={palette.filteredGroups}
                            search={palette.search}
                            selectedIndex={palette.selectedIndex}
                            listRef={palette.listRef}
                            onSelectItem={palette.runItem}
                            onHoverIndex={palette.setSelectedIndex}
                        />
                    )}
                    <PaletteFooter view={palette.view} />
                </PaletteDialog>
            )}
        </>
    );
}

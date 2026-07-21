import { useCallback, useState } from 'react';
import { getThemePreset } from '@/types/theme';
import {
    applyThemeToDocument,
    readStoredThemeId,
    writeStoredThemeId,
} from '@/utils/theme-storage';

export function useTheme(): {
    themeId: string;
    setTheme: (id: string) => void;
} {
    const [themeId, setThemeId] = useState(readStoredThemeId);

    const setTheme = useCallback((id: string): void => {
        if (!getThemePreset(id)) {
            return;
        }

        applyThemeToDocument(id);
        writeStoredThemeId(id);
        setThemeId(id);
    }, []);

    return { themeId, setTheme };
}

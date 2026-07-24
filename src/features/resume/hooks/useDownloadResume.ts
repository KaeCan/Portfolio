import { useCallback, useState } from 'react';
import type { ResumeData } from '../types';
import { generateResumePdf } from '../utils/generate-resume-pdf';

export interface UseDownloadResumeResult {
    downloadResume: () => Promise<void>;
}

export function useDownloadResume(
    resumeData: ResumeData
): UseDownloadResumeResult {
    const [isDownloading, setIsDownloading] = useState(false);

    const downloadResume = useCallback(async (): Promise<void> => {
        if (isDownloading) {
            return;
        }

        setIsDownloading(true);
        try {
            await generateResumePdf(resumeData);
        } finally {
            setIsDownloading(false);
        }
    }, [isDownloading, resumeData]);

    return { downloadResume };
}

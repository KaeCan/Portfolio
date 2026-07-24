import type { ResumeData } from '../types';
import { buildResumeElement } from './build-resume-element';
import { RESUME_DOCUMENT_STYLES } from './resume-document-styles';

const TINOS_STYLESHEET_HREF =
    'https://fonts.googleapis.com/css2?family=Tinos:wght@400;700&display=swap';

const STYLE_ELEMENT_ID = 'resume-document-styles';

const ensureTinosFont = async (): Promise<void> => {
    const existing = document.querySelector(
        `link[href="${TINOS_STYLESHEET_HREF}"]`
    );
    if (!existing) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = TINOS_STYLESHEET_HREF;
        document.head.appendChild(link);
    }

    if (document.fonts?.ready) {
        await document.fonts.ready;
    }
};

const ensureResumeStyles = (): HTMLStyleElement => {
    const existing = document.getElementById(STYLE_ELEMENT_ID);
    if (existing instanceof HTMLStyleElement) {
        return existing;
    }

    const style = document.createElement('style');
    style.id = STYLE_ELEMENT_ID;
    style.textContent = RESUME_DOCUMENT_STYLES;
    document.head.appendChild(style);
    return style;
};

const toResumeFilename = (name: string): string => {
    const slug = name.trim().replace(/\s+/g, '-');
    return `${slug}-Resume.pdf`;
};

export const generateResumePdf = async (data: ResumeData): Promise<void> => {
    const html2pdfModule = await import('html2pdf.js');
    const html2pdf = html2pdfModule.default;

    await ensureTinosFont();
    const style = ensureResumeStyles();

    const host = document.createElement('div');
    host.style.position = 'fixed';
    host.style.left = '0';
    host.style.top = '0';
    host.style.width = '7.5in';
    host.style.zIndex = '-1';
    host.style.pointerEvents = 'none';

    const element = buildResumeElement(data);
    element.style.width = '100%';
    host.appendChild(element);
    document.body.appendChild(host);

    try {
        await html2pdf()
            .set({
                margin: 0.5,
                filename: toResumeFilename(data.name),
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: {
                    scale: 2,
                    useCORS: true,
                    scrollX: 0,
                    scrollY: 0,
                },
                jsPDF: {
                    unit: 'in',
                    format: 'letter',
                    orientation: 'portrait',
                },
            })
            .from(element)
            .save();
    } finally {
        host.remove();
        style.remove();
    }
};

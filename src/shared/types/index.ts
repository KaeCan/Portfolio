export type PageType = 'home' | 'skills' | 'experience' | 'projects';

export type StyleObject = Record<string, unknown>;

export interface SkillItem {
    label: string;
    icon: string;
}

export interface SkillsData {
    frameworks: SkillItem[];
    languagesAndPlatforms: SkillItem[];
    tools: SkillItem[];
    other: SkillItem[];
}

export interface SkillCategory {
    key: string;
    label: string;
}

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubUrl?: string;
    liveUrl?: string;
    imageUrl?: string;
}

export interface ExperienceItem {
    company: string;
    position: string;
    duration: string;
    summary?: string;
    description: string | string[];
    technologies: string[];
}

export interface StatItem {
    number: string;
    label: string;
}

export interface CommandItem {
    id: string;
    children: string;
    icon: string;
    onClick?: () => void;
    href?: string;
    target?: string;
    rel?: string;
}

export interface CommandGroup {
    heading: string;
    id: string;
    items: CommandItem[];
}

export interface NavigationCommandItem {
    id: string;
    children: string;
    currentPageText: string;
    page: PageType;
    icon: string;
}

export interface SocialCommandItem {
    id: string;
    children: string;
    icon: string;
    href: string;
    target?: string;
    rel?: string;
}

export interface CustomCommandPaletteProps {
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
    currentPage: PageType;
    onNavigate: (page: PageType) => void;
}

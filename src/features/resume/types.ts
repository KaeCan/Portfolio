import type {
    EducationViewModel,
    ExperienceViewModel,
    SiteSkill,
} from '@/types/content';

export interface ResumeData {
    name: string;
    email: string;
    phone: string;
    location: string;
    website: string;
    skills: SiteSkill[];
    education: EducationViewModel[];
    experience: ExperienceViewModel[];
}

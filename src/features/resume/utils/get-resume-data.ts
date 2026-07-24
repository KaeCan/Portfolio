import { getCollection, getEntry } from 'astro:content';
import type { EducationViewModel } from '@/types/content';
import { getSortedExperiences } from '@/features/experience/utils/get-sorted-experiences';
import type { ResumeData } from '../types';

const getSortedEducation = async (): Promise<EducationViewModel[]> => {
    const educationEntries = await getCollection('education');

    return educationEntries
        .sort((a, b) => a.data.order - b.data.order)
        .map(({ data: { order: _order, ...viewModel } }) => viewModel);
};

export const getResumeData = async (): Promise<ResumeData> => {
    const siteEntry = await getEntry('site', 'site');
    if (!siteEntry) {
        throw new Error('Missing site content entry');
    }

    const { name, email, phone, location, website, skills } = siteEntry.data;
    const [education, experience] = await Promise.all([
        getSortedEducation(),
        getSortedExperiences(),
    ]);

    return {
        name,
        email,
        phone,
        location,
        website,
        skills,
        education,
        experience,
    };
};

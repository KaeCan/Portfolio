import { getCollection } from 'astro:content';
import type { ExperienceViewModel } from '@/types/content';

export const getSortedExperiences = async (): Promise<
    ExperienceViewModel[]
> => {
    const experienceEntries = await getCollection('experience');

    return experienceEntries
        .sort((a, b) => a.data.order - b.data.order)
        .map(({ data: { order: _order, ...viewModel } }) => viewModel);
};

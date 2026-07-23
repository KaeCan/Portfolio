import type { CollectionEntry } from 'astro:content';

type ExperienceCollectionData = CollectionEntry<'experience'>['data'];

export type ExperienceViewModel = Omit<ExperienceCollectionData, 'order'>;

export type ExperienceDuration = Pick<ExperienceViewModel, 'duration'>;

type ProjectCollectionData = CollectionEntry<'projects'>['data'];

export type ProjectViewModel = Omit<ProjectCollectionData, 'featured'>;

type SiteCollectionData = CollectionEntry<'site'>['data'];

export type SiteStat = SiteCollectionData['stats'][number];

export type SitePaletteData = Pick<
    SiteCollectionData,
    'navigation' | 'social' | 'actions'
>;

export type SiteNavigationItem = SiteCollectionData['navigation'][number];

export type SiteLinkItem = SiteCollectionData['social'][number];

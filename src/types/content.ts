import type { CollectionEntry } from 'astro:content';

type ExperienceCollectionData = CollectionEntry<'experience'>['data'];

/** Experience row shaped for UI — omits collection-only sort key. */
export type ExperienceViewModel = Omit<ExperienceCollectionData, 'order'>;

/** Minimal shape for hour-calculation utilities. */
export type ExperienceDuration = Pick<ExperienceViewModel, 'duration'>;

type ProjectCollectionData = CollectionEntry<'projects'>['data'];

/** Project row shaped for UI — omits collection-only featured flag. */
export type ProjectViewModel = Omit<ProjectCollectionData, 'featured'>;

type SiteCollectionData = CollectionEntry<'site'>['data'];

export type SiteStat = SiteCollectionData['stats'][number];

/** Site fields consumed by the command palette builder. */
export type SitePaletteData = Pick<
    SiteCollectionData,
    'navigation' | 'social' | 'actions'
>;

export type SiteNavigationItem = SiteCollectionData['navigation'][number];

export type SiteLinkItem = SiteCollectionData['social'][number];

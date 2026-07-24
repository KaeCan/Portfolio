import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { ACTION_ICONS, NAV_ICONS } from '@/types/icons';
import { sanityLoader } from '@/loaders/sanity-loader';

const experience = defineCollection({
    loader: sanityLoader({
        query: `*[_type == "experience"]{
            id,
            order,
            company,
            position,
            duration,
            description,
            technologies,
            ...select(defined(summary) => {summary})
        }`,
    }),
    schema: z.object({
        id: z.string(),
        company: z.string(),
        position: z.string(),
        duration: z.string(),
        summary: z.string().optional(),
        description: z.array(z.string()),
        technologies: z.array(z.string()),
        order: z.number(),
    }),
});

const education = defineCollection({
    loader: sanityLoader({
        query: `*[_type == "education"]{
            id,
            order,
            institution,
            degree,
            graduationDate,
            highlights,
            ...select(defined(gpa) => {gpa})
        }`,
    }),
    schema: z.object({
        id: z.string(),
        institution: z.string(),
        degree: z.string(),
        gpa: z.string().optional(),
        graduationDate: z.string(),
        highlights: z.array(z.string()),
        order: z.number(),
    }),
});

const projects = defineCollection({
    loader: sanityLoader({
        query: `*[_type == "project"]{
            id,
            title,
            description,
            technologies,
            featured,
            ...select(defined(githubUrl) => {githubUrl}),
            ...select(defined(liveUrl) => {liveUrl}),
            ...select(defined(imageUrl) => {imageUrl})
        }`,
    }),
    schema: z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        technologies: z.array(z.string()),
        githubUrl: z.url().optional(),
        liveUrl: z.url().optional(),
        imageUrl: z.url().optional(),
        featured: z.boolean(),
    }),
});

const site = defineCollection({
    loader: sanityLoader({
        query: `*[_type == "site"]{
            id,
            name,
            role,
            description,
            githubProfile,
            email,
            phone,
            location,
            website,
            skills[]{ category, items },
            stats[]{ number, label },
            navigation[]{ id, label, currentLabel, href, icon },
            social[]{ id, label, href, icon, external },
            actions[]{ id, label, href, icon, external }
        }`,
    }),
    schema: z.object({
        id: z.string(),
        name: z.string(),
        role: z.string(),
        description: z.string(),
        githubProfile: z.url(),
        email: z.string().email(),
        phone: z.string(),
        location: z.string(),
        website: z.url(),
        skills: z.array(
            z.object({
                category: z.string(),
                items: z.array(z.string()),
            })
        ),
        stats: z.array(
            z.object({
                number: z.string(),
                label: z.string(),
            })
        ),
        navigation: z.array(
            z.object({
                id: z.string(),
                label: z.string(),
                currentLabel: z.string(),
                href: z.string(),
                icon: z.enum(NAV_ICONS),
            })
        ),
        social: z.array(
            z.object({
                id: z.string(),
                label: z.string(),
                href: z.string(),
                icon: z.enum(ACTION_ICONS),
                external: z.boolean(),
            })
        ),
        actions: z.array(
            z.object({
                id: z.string(),
                label: z.string(),
                href: z.string(),
                icon: z.enum(ACTION_ICONS),
                external: z.boolean(),
            })
        ),
    }),
});

export const collections = {
    experience,
    education,
    projects,
    site,
};

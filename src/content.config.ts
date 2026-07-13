import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const experience = defineCollection({
    loader: file('src/content/experience.json'),
    schema: z.object({
        id: z.string(),
        company: z.string(),
        position: z.string(),
        duration: z.string(),
        summary: z.string().optional(),
        description: z.union([z.string(), z.array(z.string())]),
        technologies: z.array(z.string()),
        order: z.number().default(0),
    }),
});

/** Kept for later — projects page is currently disabled (no route). */
const projects = defineCollection({
    loader: file('src/content/projects.json'),
    schema: z.object({
        id: z.string(),
        title: z.string(),
        description: z.string(),
        technologies: z.array(z.string()),
        githubUrl: z.string().url().optional(),
        liveUrl: z.string().url().optional(),
        imageUrl: z.string().url().optional(),
        featured: z.boolean().default(false),
    }),
});

const site = defineCollection({
    loader: file('src/content/site.json'),
    schema: z.object({
        id: z.string(),
        name: z.string(),
        role: z.string(),
        description: z.string(),
        githubProfile: z.string().url(),
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
                icon: z.enum(['home', 'experience']),
            })
        ),
        social: z.array(
            z.object({
                id: z.string(),
                label: z.string(),
                href: z.string(),
                icon: z.enum(['github', 'linkedin', 'email', 'resume']),
                external: z.boolean().default(true),
            })
        ),
        actions: z.array(
            z.object({
                id: z.string(),
                label: z.string(),
                href: z.string(),
                icon: z.enum(['github', 'linkedin', 'email', 'resume']),
                external: z.boolean().default(true),
            })
        ),
    }),
});

export const collections = { experience, projects, site };

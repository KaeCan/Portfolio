import { defineField, defineType } from 'sanity';

const navIconOptions = [
    { title: 'Home', value: 'home' },
    { title: 'Experience', value: 'experience' },
];

const actionIconOptions = [
    { title: 'GitHub', value: 'github' },
    { title: 'LinkedIn', value: 'linkedin' },
    { title: 'Email', value: 'email' },
    { title: 'Resume', value: 'resume' },
];

const linkFields = [
    defineField({
        name: 'id',
        title: 'ID',
        type: 'string',
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'label',
        title: 'Label',
        type: 'string',
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'href',
        title: 'Href',
        type: 'string',
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'icon',
        title: 'Icon',
        type: 'string',
        options: { list: actionIconOptions },
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'external',
        title: 'External',
        type: 'boolean',
        initialValue: true,
        validation: (rule) => rule.required(),
    }),
];

export const site = defineType({
    name: 'site',
    title: 'Site',
    type: 'document',
    fields: [
        defineField({
            name: 'id',
            title: 'ID',
            type: 'string',
            initialValue: 'site',
            readOnly: true,
            validation: (rule) => rule.required().custom((value) => {
                return value === 'site' ? true : 'Must be "site"';
            }),
        }),
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 2,
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'githubProfile',
            title: 'GitHub profile URL',
            type: 'url',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'stats',
            title: 'Stats',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'number',
                            title: 'Number',
                            type: 'string',
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'label',
                            title: 'Label',
                            type: 'string',
                            validation: (rule) => rule.required(),
                        }),
                    ],
                    preview: {
                        select: { title: 'label', subtitle: 'number' },
                    },
                },
            ],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'navigation',
            title: 'Navigation',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'id',
                            title: 'ID',
                            type: 'string',
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'label',
                            title: 'Label',
                            type: 'string',
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'currentLabel',
                            title: 'Current label',
                            type: 'string',
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'href',
                            title: 'Href',
                            type: 'string',
                            validation: (rule) => rule.required(),
                        }),
                        defineField({
                            name: 'icon',
                            title: 'Icon',
                            type: 'string',
                            options: { list: navIconOptions },
                            validation: (rule) => rule.required(),
                        }),
                    ],
                    preview: {
                        select: { title: 'label', subtitle: 'href' },
                    },
                },
            ],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'social',
            title: 'Social links',
            type: 'array',
            of: [{ type: 'object', fields: linkFields }],
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'actions',
            title: 'Actions',
            type: 'array',
            of: [{ type: 'object', fields: linkFields }],
            validation: (rule) => rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'role',
        },
    },
});

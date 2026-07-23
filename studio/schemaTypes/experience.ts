import { defineField, defineType } from 'sanity';

export const experience = defineType({
    name: 'experience',
    title: 'Experience',
    type: 'document',
    fields: [
        defineField({
            name: 'id',
            title: 'ID',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'order',
            title: 'Order',
            type: 'number',
            initialValue: 0,
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'company',
            title: 'Company',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'position',
            title: 'Position',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'duration',
            title: 'Duration',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'summary',
            title: 'Summary',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'description',
            title: 'Description bullets',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (rule) => rule.required().min(1),
        }),
        defineField({
            name: 'technologies',
            title: 'Technologies',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (rule) => rule.required(),
        }),
    ],
    preview: {
        select: {
            title: 'company',
            subtitle: 'position',
            order: 'order',
        },
        prepare({ title, subtitle, order }) {
            return {
                title: title ?? 'Untitled',
                subtitle: `${subtitle ?? ''} · order ${order ?? 0}`,
            };
        },
    },
    orderings: [
        {
            title: 'Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
    ],
});

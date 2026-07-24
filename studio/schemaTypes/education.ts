import { defineField, defineType } from 'sanity';

export const education = defineType({
    name: 'education',
    title: 'Education',
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
            name: 'institution',
            title: 'Institution',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'degree',
            title: 'Degree',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'gpa',
            title: 'GPA',
            type: 'string',
        }),
        defineField({
            name: 'graduationDate',
            title: 'Graduation date',
            type: 'string',
            validation: (rule) => rule.required(),
        }),
        defineField({
            name: 'highlights',
            title: 'Highlights',
            type: 'array',
            of: [{ type: 'string' }],
            validation: (rule) => rule.required().min(1),
        }),
    ],
    preview: {
        select: {
            title: 'institution',
            subtitle: 'degree',
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

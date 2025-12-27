import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    type: 'content',
    // Schema validation for blog posts
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
    }),
});

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        link: z.string().url().optional(),
        status: z.string().optional(),
        order: z.number().default(0),
    }),
});

export const collections = { blog, projects };

import { defineCollection, z } from 'astro:content';

const articleCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    thumbnail: z.string(),
    date: z.date(),
  }),
});

const actionCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    thumbnail: z.string(),
  }),
});

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string().optional(),
    icon: z.string().optional(),
    isImportant: z.boolean().default(false),
    badge: z.string().optional(),
    href: z.string().optional(),
    draft: z.boolean().default(true),
  }),
});

export const collections = {
  articles: articleCollection,
  actions: actionCollection,
  news: newsCollection,
};

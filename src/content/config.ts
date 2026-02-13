import { defineCollection, z } from "astro:content";

const articleCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    category: z.string(),
    thumbnail: z.string(),
    date: z.date(),
  }),
});

const actionCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    thumbnail: z.string(),
  }),
});

export const collections = {
  article: articleCollection,
  action: actionCollection,
};

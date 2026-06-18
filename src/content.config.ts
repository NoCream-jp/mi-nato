import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    draft: z.boolean().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
  }),
});

const actionCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/action" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
  }),
});

export const collections = {
  action: actionCollection,
  blog: blogCollection,
};

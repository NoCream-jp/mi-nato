import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "zod";

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

const actionLogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/action-log" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string().optional(),
  }),
});

const certificationCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/certification" }),
  schema: z.object({
    title: z.string(),
    issuer: z.string(),
    date: z.string(),
    tags: z.array(z.string()),
    description: z.string(),
    link: z.string().optional(),
  }),
});

const learningCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/learning" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    order: z.number().optional(),
    logo: z.string().optional(),
  }),
});

export const collections = {
  blog: blogCollection,
  "action-log": actionLogCollection,
  certification: certificationCollection,
  learning: learningCollection,
};

import { defineCollection, z } from 'astro:content';

const articleCollection = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		thumbnail: z.string(),
	}),
});

export const collections = {
	'article': articleCollection,
};
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

const aboutme = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { 'blog': blog, 'aboutme': aboutme };

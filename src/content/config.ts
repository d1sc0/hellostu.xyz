// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      postImage: z.object({
        src: z.string(),
        alt: z.string()
      }),
      socialImage: z.string().optional(),
      tags: z.array(z.string()),
      draft: z.boolean().optional()
    })
});

// Export a single `collections` object to register your collection(s)
export const collections = {
  posts: postsCollection,
};
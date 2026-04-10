// Migrated from src/content/config.ts for Astro v6
// See https://docs.astro.build/en/guides/upgrade-to/v6/#removed-legacy-content-collections
// Ensure each collection has a loader defined if needed

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    slug: z.string(),
    pubDate: z.date(),
    description: z.string(),
    postImage: z.object({
      src: z.string(),
    }),
    tags: z.array(z.string()),
    draft: z.boolean().optional(),
  }),
});

export const collections = { posts };

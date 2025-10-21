// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';

// https://astro.build/config
export default defineConfig({
	site: 'https://example.com',
	// Pass math plugins into the MDX integration so MDX files get the same processing
	integrations: [
		mdx({ remarkPlugins: [remarkMath], rehypePlugins: [rehypeKatex] }),
		sitemap(),
	],
	markdown: {
		remarkPlugins: [remarkMath],
		rehypePlugins: [rehypeKatex],
	}
});
// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeExternalLinks from 'rehype-external-links';
import remarkGfm from 'remark-gfm';
import remarkSmartypants from 'remark-smartypants';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://sharunkuhar.com',
	trailingSlash: 'always',
	server: { host: true },
	integrations: [mdx(), sitemap()],
	markdown: {
		shikiConfig: {
			theme: 'nord',
		},
		remarkPlugins: [remarkGfm, remarkSmartypants],
		rehypePlugins: [
			[
				rehypeExternalLinks,
				{
					target: '_blank',
				},
			],
		],
	},
});
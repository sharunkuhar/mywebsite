import { getCollection } from 'astro:content';
import rss from '@astrojs/rss';

export async function GET(context) {
	const posts = await getCollection('blog');
	return rss({
		title: 'My Astro Blog',
		description: 'The perfect starter for your perfect blog.',
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `${import.meta.env.BASE_URL}blog/${post.id}/`,
		})),
	});
}
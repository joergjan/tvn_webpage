import { eventsQuery, recentBlogPostsQuery } from '$lib/sanity/queries';
import { client } from '$lib/sanity/client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (even) => {
	const [events, blogPosts] = await Promise.all([
		client.fetch(eventsQuery),

		client.fetch(recentBlogPostsQuery)
	]);

	return {
		events,
		blogPosts
	};
};

import { eventsQuery, pastEventsQuery, recentBlogPostsQuery } from '$lib/sanity/queries';
import { client } from '$lib/sanity/client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (even) => {
	const [events, pastEvents, blogPosts] = await Promise.all([
		client.fetch(eventsQuery),
		client.fetch(pastEventsQuery),
		client.fetch(recentBlogPostsQuery)
	]);

	return {
		events,
		pastEvents,
		blogPosts
	};
};

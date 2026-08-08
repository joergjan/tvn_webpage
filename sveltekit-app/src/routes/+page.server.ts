import { eventsQuery, pastEventsQuery, recentBlogPostsQuery, aboutQuery } from '$lib/sanity/queries';
import { client } from '$lib/sanity/client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (even) => {
	const [events, pastEvents, blogPosts, about] = await Promise.all([
		client.fetch(eventsQuery),
		client.fetch(pastEventsQuery),
		client.fetch(recentBlogPostsQuery),
		client.fetch(aboutQuery)
	]);

	return {
		events,
		pastEvents,
		blogPosts,
		about
	};
};

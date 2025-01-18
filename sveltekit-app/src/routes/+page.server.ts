import {
	upcomingAppearancesQuery,
	homeImageQuery,
	recentBlogPostsQuery,
	aboutQuery
} from '$lib/sanity/queries';
import { client } from '$lib/sanity/client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const [appearances, homeImage, blogPosts, about] = await Promise.all([
		client.fetch(upcomingAppearancesQuery),
		client.fetch(homeImageQuery),
		client.fetch(recentBlogPostsQuery),
		client.fetch(aboutQuery)
	]);

	// Return the data separately for each query
	return {
		appearances,
		homeImage,
		blogPosts,
		about
	};
};

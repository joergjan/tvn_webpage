import { blogPostsQuery } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';
import { client } from '$lib/sanity/client';

export const load: PageServerLoad = async (event) => {
	const blogPosts = await client.fetch(blogPostsQuery);

	return {
		blogPosts
	};
};

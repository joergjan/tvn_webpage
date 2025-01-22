import { blogPostsQuery } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';
import { client } from '$lib/sanity/client';

export const load: PageServerLoad = async (event) => {
	const { id } = event.params;

	const params = { id };

	const blogPost = await client.fetch(blogPostsQuery, { params });

	return {
		blogPost: blogPost[0]
	};
};

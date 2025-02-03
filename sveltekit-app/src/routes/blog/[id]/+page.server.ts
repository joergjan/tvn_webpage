import { blogPostQuery } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';
import { client } from '$lib/sanity/client';

export const load: PageServerLoad = async (event) => {
	const id = String(event.params.id);

	const blogPost = await client.fetch(blogPostQuery(id));

	return {
		blogPost: blogPost[0]
	};
};

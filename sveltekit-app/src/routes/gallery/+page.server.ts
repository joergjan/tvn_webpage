import { imagesQuery } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';
import { client } from '$lib/sanity/client';

export const load: PageServerLoad = async (event) => {
	const images = await client.fetch(imagesQuery);

	return {
		images
	};
};

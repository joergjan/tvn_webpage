import { downloadsQuery } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';
import { client } from '$lib/sanity/client';

export const load: PageServerLoad = async (event) => {
	const downloads = await client.fetch(downloadsQuery);

	return {
		downloads
	};
};

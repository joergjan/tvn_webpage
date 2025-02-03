import { riegenQuery } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';
import { client } from '$lib/sanity/client';

export const load: PageServerLoad = async (event) => {
	const riegen = await client.fetch(riegenQuery);

	return {
		riegen
	};
};

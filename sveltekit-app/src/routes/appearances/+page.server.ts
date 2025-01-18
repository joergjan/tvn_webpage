import { appearancesQuery } from '$lib/sanity/queries';
import { client } from '$lib/sanity/client';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const appearances = await client.fetch(appearancesQuery);

	return {
		appearances
	};
};

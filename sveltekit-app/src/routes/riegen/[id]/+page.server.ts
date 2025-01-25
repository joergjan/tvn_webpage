import { riegeQuery } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';
import { client } from '$lib/sanity/client';

export const load: PageServerLoad = async (event) => {
	const id = String(event.params.id);

	const riege = await client.fetch(riegeQuery(id));

	return {
		riege: riege[0]
	};
};

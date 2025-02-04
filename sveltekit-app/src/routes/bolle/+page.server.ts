import { bolleFaqQuery, bolleProgrammQuery, bolleQuery } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';
import { client } from '$lib/sanity/client';

export const load: PageServerLoad = async (event) => {
	const [bolleFaq, bolleProgramm, bolle] = await Promise.all([
		client.fetch(bolleFaqQuery),
		client.fetch(bolleProgrammQuery),
		client.fetch(bolleQuery)
	]);

	return {
		bolleFaq,
		bolleProgramm,
		bolle: bolle[0]
	};
};

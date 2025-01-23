import { kontaktLeiter, kontaktVorstand } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';
import { client } from '$lib/sanity/client';

export const load: PageServerLoad = async (event) => {
	const [leiter, vorstand] = await Promise.all([
		client.fetch(kontaktLeiter),
		client.fetch(kontaktVorstand)
	]);

	return {
		leiter,
		vorstand
	};
};

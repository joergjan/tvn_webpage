import { contactQuery } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';
import { client } from '$lib/sanity/client';

export const load: PageServerLoad = async (event) => {
	const contact = await client.fetch(contactQuery);

	return {
		contact
	};
};

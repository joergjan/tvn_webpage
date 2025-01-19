import { galerieAktive, galerieJugi } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';
import { client } from '$lib/sanity/client';

export const load: PageServerLoad = async (event) => {
	const [galerieAktive, galerieJugi] = await Promise.all([
		client.fetch(galerieAktive),
		client.fetch(galerieJugi)
	]);

	return {
		galerieAktive,
		galerieJugi
	};
};

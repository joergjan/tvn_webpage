import { galerieAktive, galerieJugi } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';
import { client } from '$lib/sanity/client';

export const ssr = true;

export const load: PageServerLoad = async (event) => {
	const [aktive, jugi] = await Promise.all([
		client.fetch(galerieAktive),
		client.fetch(galerieJugi)
	]);

	return {
		aktive,
		jugi
	};
};

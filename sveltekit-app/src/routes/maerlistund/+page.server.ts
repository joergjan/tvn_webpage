import { galerieAktive, galerieJugi } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';
import { client } from '$lib/sanity/client';
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async (event) => {
	redirect(301, '/');
};

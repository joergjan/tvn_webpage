import { videosQuery, youtubeQuery } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';
import { client } from '$lib/sanity/client';

export const load: PageServerLoad = async (event) => {
	const [videos, youtube] = await Promise.all([
		client.fetch(videosQuery),
		client.fetch(youtubeQuery)
	]);

	return {
		videos,
		youtube
	};
};

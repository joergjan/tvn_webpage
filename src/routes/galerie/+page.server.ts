import type { Actions } from '../$types';
import { PRIVATE_API_KEY } from '$env/static/private';
import { link } from '$lib/scripts/api';

export const actions: Actions = {
	getGaleries: async () => {
		const galeries = await fetch(link + '/api/v1/main/galery/getImages', {
			headers: {
				'TVN-API-KEY': PRIVATE_API_KEY
			}
		});

		return {
			galeries: JSON.stringify(await galeries.json())
		};
	}
};

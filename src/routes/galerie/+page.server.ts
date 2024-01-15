import type { Actions } from '../de/$types';
import { PRIVATE_API_KEY } from '$env/static/private';

export const actions: Actions = {
	getImageFolder: async () => {
		const imageFolder = await fetch('https://cms.tvnussbaumen.ch/api/v1/main/galery/getImages', {
			headers: {
				'TVN-API-KEY': PRIVATE_API_KEY
			}
		});

		return {
			imageFolder: JSON.stringify(await imageFolder.json())
		};
	}
};

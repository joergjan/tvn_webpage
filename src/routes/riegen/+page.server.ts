import type { Actions } from '../de/$types';
import { PRIVATE_API_KEY } from '$env/static/private';

export const actions: Actions = {
	getRiegen: async () => {
		const riegen = await fetch('https://cms.tvnussbaumen.ch/api/v1/main/getRiegen', {
			headers: {
				'TVN-API-KEY': PRIVATE_API_KEY
			}
		});

		return {
			riegen: JSON.stringify(await riegen.json())
		};
	},

	getLeiter: async () => {
		const leiter = await fetch('https://cms.tvnussbaumen.ch/api/v1/main/getLeiter', {
			headers: {
				'TVN-API-KEY': PRIVATE_API_KEY
			}
		});

		return {
			leiter: JSON.stringify(await leiter.json())
		};
	},
	getVorstand: async () => {
		const vorstand = await fetch('https://cms.tvnussbaumen.ch/api/v1/main/getVorstand', {
			headers: {
				'TVN-API-KEY': PRIVATE_API_KEY
			}
		});

		return {
			vorstand: JSON.stringify(await vorstand.json())
		};
	},
	getRoles: async () => {
		const roles = await fetch('https://cms.tvnussbaumen.ch/api/v1/main/getRoles', {
			headers: { 'TVN-API-KEY': PRIVATE_API_KEY }
		});

		return {
			roles: JSON.stringify(await roles.json())
		};
	},
	getImageFolder: async () => {
		const imageFolder = await fetch('https://cms.tvnussbaumen.ch/api/v1/main/galery/getImages', {
			headers: {
				'TVN-API-KEY': PRIVATE_API_KEY
			}
		});

		return {
			imageFolder: JSON.stringify(await imageFolder.json())
		};
	},
	getPosts: async () => {
		const posts = await fetch('https://cms.tvnussbaumen.ch/api/v1/main/getPosts', {
			headers: {
				'TVN-API-KEY': PRIVATE_API_KEY
			}
		});

		return {
			posts: JSON.stringify(await posts.json())
		};
	}
};

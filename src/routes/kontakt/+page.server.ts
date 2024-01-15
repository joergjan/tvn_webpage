import sgMail from '@sendgrid/mail';
import { PRIVATE_SENDGRID_API_KEY, PRIVATE_API_KEY } from '$env/static/private';
import type { Actions } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';

sgMail.setApiKey(PRIVATE_SENDGRID_API_KEY);

export const actions: Actions = {
	sendMail: async ({ request }) => {
		const formData = Object.fromEntries(await request.formData());
		const message = (formData.message as string) || '';
		const surname = (formData.surname as string) || '';
		const firstname = (formData.firstname as string) || '';
		const email = (formData.email as string) || '';

		const msg = {
			to: 'info@tvnussbaumen.ch', // Change to your recipient
			from: 'contactform@tvnussbaumen.ch', // Change to your verified sender
			subject: 'Neue Nachricht',
			text: message,
			html: `
    <strong>${firstname} ${surname} hat uns eine Nachricht hinterlassen</strong>
    <p>${message}</p>
    <p>${email}</p>
`
		};

		try {
			await sgMail.send(msg);
			console.log('Email sent');
		} catch (error) {
			console.error('SendGrid API errors:', error);
			return fail(400, { message: 'Failed. Try again.' });
		}

		return { succes: false };
	},
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

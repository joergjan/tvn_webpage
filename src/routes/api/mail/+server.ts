import { PRIVATE_MAIL_KEY } from '$env/static/private';
import sgMail from '@sendgrid/mail';
import type { RequestHandler, RequestEvent } from '@sveltejs/kit';
import axios from 'axios';
sgMail.setApiKey(PRIVATE_MAIL_KEY);

export async function POST({ request }) {
	const { name, email, message } = request.body as { name: string; email: string; message: string };

	try {
		const response = await axios.post(
			'https://api.sendgrid.com/v3/mail/send',
			{ name, email, message },
			{
				headers: {
					Authorization: `Bearer ${PRIVATE_MAIL_KEY}`
				}
			}
		);
		console.log(response.data);
		return JSON.stringify({
			status: 200,
			body: { message: 'Success' }
		});
	} catch (error) {
		console.error(error);
		return JSON.stringify({
			status: 500,
			body: { message: 'Error' }
		});
	}
}

export const POST: RequestHandler = async (e: RequestEvent) => {

	e.cookies
	e.paramse
	e.request.body
	e.fetch("SOMEURL")

	

	return json({ name: "dog"})
}
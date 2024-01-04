import { auth } from '$lib/server/db/lucia';
import { fail, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.auth.validate();
	if (session) {
		throw redirect(302, '/verwaltung');
	}
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const { username, password } = Object.fromEntries(await request.formData()) as Record<
			string,
			string
		>;

		try {
			const key = await auth.useKey('username', username, password);
			const session = await auth.createSession({
				userId: key.userId,
				attributes: {} // expects `Lucia.DatabaseSessionAttributes`
			});
			locals.auth.setSession(session);
		} catch (err) {
			console.error(err);
			return fail(400, { message: 'Could not login user.' });
		}
		throw redirect(302, '/verwaltung');
	}
};

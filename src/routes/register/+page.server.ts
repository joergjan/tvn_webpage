import { auth } from "$lib/server/db/lucia";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
    const session = await locals.auth.validate();
    if (session) {
        throw redirect(302, "/verwaltung");
    }

    /* 

	replace if statement above in production for security

	if (!session) {
        throw redirect(302, "/");
    }
	*/
};

export const actions: Actions = {
    default: async ({ request, locals }) => {
        /*

		add this in production for security

		if (session) {
			throw redirect(302, "/");
		}
		*/

        const { name, username, password } = Object.fromEntries(
            await request.formData()
        ) as Record<string, string>;
        try {
            const user = await auth.createUser({
                key: {
                    providerId: "username", // auth method
                    providerUserId: username.toLowerCase(), // unique id when using "username" auth method
                    password, // hashed by Lucia
                },
                attributes: {
                    username,
                    name,
                },
            });
            const session = await auth.createSession({
                userId: user.userId,
                attributes: {},
            });
            locals.auth.setSession(session); // set session cookie
        } catch (err) {
            console.error(err);
            return fail(400, { message: "Could not register user" });
        }
        throw redirect(302, "/login");
    },
};

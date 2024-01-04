// import { handleHooks } from "@lucia-auth/sveltekit"
import { auth } from '$lib/server/db/lucia';
import type { Handle } from '@sveltejs/kit';
import { onMount } from 'svelte';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.auth = auth.handleRequest(event);

	return await resolve(event);
};

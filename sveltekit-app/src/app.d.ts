import type { LoaderLocals } from '@sanity/svelte-loader';
import { Anlass, BlogPost } from '$lib/sanity/queries';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Locals extends LoaderLocals {}
	}
	type Anlass = Anlass;
	type BlogPost = BlogPost;
}

export {};

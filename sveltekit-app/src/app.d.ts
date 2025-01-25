import type { LoaderLocals } from '@sanity/svelte-loader';
import { Anlass, BlogPost, Riege, Person, Gallery } from '$lib/sanity/queries';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Locals extends LoaderLocals {}
	}
	type Anlass = Anlass;
	type BlogPost = BlogPost;
	type Riege = Riege;
	type Person = Person;
	type Gallery = Gallery;
}

export {};

import type { LoaderLocals } from '@sanity/svelte-loader';
import {
	Appearance,
	News,
	BlogPost,
	Image,
	Home,
	Video,
	About,
	Contact
} from '$lib/sanity/queries';

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		interface Locals extends LoaderLocals {}
	}
	type Appearance = Appearance;
	type BlogPost = BlogPost;
	type Image = Image;
	type Home = Home;
	type Video = Video;
	type About = About;
	type Contact = Contact;
}

export {};

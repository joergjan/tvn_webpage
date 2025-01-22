import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, Slug } from '@sanity/types';
import groq from 'groq';

export const eventsQuery = groq`*[_type == "event" && dateFrom > now()]  | order(date asc)`;

export const blogPostsQuery = groq`*[_type == "blogPost"] | order(date desc)`;
export const recentBlogPostsQuery = groq`*[_type == "blogPost"] | order(date desc) [0..1]`;
export const blogPostQuery = groq`*[_type == "blogpost" && slug.current === $slug][0]`;

export const aboutQuery = groq`*[_type == "about"][0]`;

export const kontaktVorstand = groq`*[_type == "kontaktVorstand"]`;
export const kontaktLeiter = groq`*[_type == "kontaktLeiter"]`;
export const galerieJugi = groq`*[_type == "galerieJugi"] | order(date desc)`;
export const galerieAktive = groq`*[_type == "galerieAktive"] | order(date desc)`;

export interface Anlass {
	_type: 'event';
	_createdAt: string;
	title: string;
	dateFrom: Date;
	dateTo: Date;
	mainImage: ImageAsset;
	description: string;
}

export interface BlogPost {
	_type: 'blog';
	_createdAt: string;
	title: string;
	date: Date;
	mainImage: ImageAsset;
	body: string;
}

export interface Video {
	_type: 'video';
	_createdAt: string;
	title: string;
	video: File;
}

export interface About {
	_type: 'about';
	_createdAt: string;
	title: string;
	body: string;
}

export interface Contact {
	_type: 'contact';
	_createdAt: string;
	street: string;
	postcode: number;
	place: string;
	mail: string;
	firstname: string;
	lastname: string;
}

export interface Youtube {
	_type: 'youtube';
	_createdAt: string;
	title: string;
	link: string;
}

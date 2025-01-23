import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, Slug } from '@sanity/types';
import groq from 'groq';

export const eventsQuery = groq`*[_type == "event" && dateFrom > now()]  | order(date asc)`;

export const blogPostsQuery = groq`*[_type == "blogPost"] | order(date desc)`;
export const recentBlogPostsQuery = groq`*[_type == "blogPost"] | order(date desc) [0..1]`;
export const blogPostQuery = groq`*[_type == "blogpost" && slug.current === $slug][0]`;

export const aboutQuery = groq`*[_type == "about"][0]`;

export const kontaktVorstand = groq`*[_type == "kontaktVorstand"]`;

export const kontaktLeiter = groq`
	*[_type == "kontaktLeiter"]{
		...,
		"riege":  *[_type=="riege" && references(^._id)]{
			...
		},
  	}`;

export const galerieJugi = groq`*[_type == "galerieJugi"] | order(date desc)`;
export const galerieAktive = groq`*[_type == "galerieAktive"] | order(date desc)`;

export const riegeQuery = groq`
  *[_type == "riege"]{
    ...,
    "kontaktLeiter": *[_type == "kontaktLeiter" && references(^._id)]{
      ...
    }
  }
`;

export interface Leiter {
	_type: 'kontaktLeiter';
}

export interface Vorstand {
	_type: 'kontaktVorstand';
}

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

export interface Riege {
	_type: 'riege';
	_createdAt: string;
}

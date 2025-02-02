import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, Slug } from '@sanity/types';
import groq from 'groq';

export const eventsQuery = groq`*[_type == "event" && dateFrom > now()]  | order(dateFrom asc)`;

export const blogPostsQuery = groq`*[_type == "blogPost"] | order(date desc)`;
export const recentBlogPostsQuery = groq`*[_type == "blogPost"] | order(date desc) [0..1]`;
export const blogPostQuery = (id: string) => {
	return groq`*[_type == "blogPost" && _id == "${id}"]`;
};

export const aboutQuery = groq`*[_type == "about"][0]`;

export const kontaktVorstand = groq`*[_type == "kontaktVorstand"]`;

export const kontaktLeiter = groq`
  *[_type == "kontaktLeiter"]{
    ...,
    "riege": riege[]->{
      _id,
      name,
      age,
      body,
      image
    }
  }`;

export const downloadsQuery = groq`*[_type == "download"]`;

export const galerieJugi = groq`*[_type == "galerieJugi"] | order(date desc)`;
export const galerieAktive = groq`*[_type == "galerieAktive"] | order(date desc)`;

export const riegenQuery = groq`
  *[_type == "riege"]{
    ...,
   "kontaktLeiter": *[_type == 'kontaktLeiter' && references(^._id)]{
	...
  },
 training,
  }
`;
export const riegeQuery = (id: string) => {
	return groq`
	*[_type == 'riege' && _id == "${id}"]{
 ...,
  "kontaktLeiter": *[_type == 'kontaktLeiter' && references(^._id)]{
	...
  },
  training
 }`;
};

export interface Person {
	_type: 'kontaktVorstand' | 'kontaktLeiter';
	_createdAt: string;
	fullname: string;
}

export interface Gallery {
	_type: 'galerieJugi' | 'galerieAktive';
	_createdAt: string;
	title: string;
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
	kontaktLeiter: Person[];
}

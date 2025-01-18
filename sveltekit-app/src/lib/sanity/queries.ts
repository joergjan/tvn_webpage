import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, Slug } from '@sanity/types';
import groq from 'groq';

export const appearancesQuery = groq`*[_type == "appearance" && date > now()]  | order(date asc)`;
export const upcomingAppearancesQuery = groq`*[_type == "appearance" && date > now()] | order(date asc) [0..2]`;

export const imagesQuery = groq`*[_type == "photo"]  | order(_createdAt desc)`;

export const homeImageQuery = groq`*[_type == "home"] | order(_createdAt desc)`;

export const blogPostsQuery = groq`*[_type == "blogPost"] | order(date desc)`;
export const recentBlogPostsQuery = groq`*[_type == "blogPost"] | order(date desc) [0..1]`;

export const aboutQuery = groq`*[_type == "about"][0]`;

export const youtubeQuery = groq`*[_type == "youtube"]`;

export const videosQuery = groq`*[_type == "video"]{
	title,
	"url": video.asset->url
  } | order(_createdAt desc)`;

export const contactQuery = groq`*[_type == "contact"][0]`;

export interface Appearance {
	_type: 'appearance';
	_createdAt: string;
	title?: string;
	date: Date;
	location: string;
}

export interface Image {
	_type: 'appearance';
	_createdAt: string;
	mainImage: ImageAsset;
	title: string;
}

export interface Home {
	_type: 'home';
	_createdAt: string;
	mainImage: ImageAsset;
	title: string;
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

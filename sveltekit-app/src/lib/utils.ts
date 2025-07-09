import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } from '$env/static/public';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, 'child'> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, 'children'> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & { ref?: U | null };

export function formatDate(date: Date) {
	return new Date(date).toLocaleDateString('de-CH', {
		month: 'long',
		day: 'numeric',
		year: 'numeric'
	});
}

export const getDownloadUrl = (ref: string) => {
	// Example ref: file-207fd9951e759130053d37cf0a558ffe84ddd1c9-mp3
	// We don't need the first part, unless we're using the same function for files and images
	const [_file, id, extension] = ref.split('-');
	return `https://cdn.sanity.io/files/${PUBLIC_SANITY_PROJECT_ID}/${PUBLIC_SANITY_DATASET}/${id}.${extension}?dl=`;
};

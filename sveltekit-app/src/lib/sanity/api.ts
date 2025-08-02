import {
	PUBLIC_SANITY_DATASET as sanity_dataset,
	PUBLIC_SANITY_TVN_PROJECT_ID as sanity_project_id,
	PUBLIC_SANITY_TVN_API_VERSION as sanity_api_version,
	PUBLIC_SANITY_TVN_STUDIO_URL as sanity_studio_url
} from '$env/static/public';

export function assertEnvVar<T>(value: T | undefined, name: string): T {
	if (value === undefined) {
		throw new Error(`Missing environment variable: ${name}`);
	}
	return value;
}

export const dataset = assertEnvVar(sanity_dataset, 'PUBLIC_SANITY_DATASET');

export const projectId = assertEnvVar(sanity_project_id, 'PUBLIC_SANITY_PROJECT_ID');

export const apiVersion = sanity_api_version || '2024-03-15';

export const studioUrl = sanity_studio_url || 'http://localhost:3333';

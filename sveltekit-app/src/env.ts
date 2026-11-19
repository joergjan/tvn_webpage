import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	PUBLIC_LIGHTGALLERY_KEY: { public: true, static: true },
	PUBLIC_SANITY_DATASET: { public: true, static: true },
	PUBLIC_SANITY_TVN_PROJECT_ID: { public: true, static: true },
	PUBLIC_SANITY_TVN_API_VERSION: { public: true, static: true, schema: (value) => value },
	PUBLIC_SANITY_TVN_STUDIO_URL: { public: true, static: true, schema: (value) => value },
	SANITY_API_TVN_READ_TOKEN: { static: true, schema: (value) => value }
});

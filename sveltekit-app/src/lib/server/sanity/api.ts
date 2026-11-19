import { SANITY_API_TVN_READ_TOKEN } from '$app/env/private';
import { assertEnvVar } from '$lib/sanity/api';

export const token = assertEnvVar(SANITY_API_TVN_READ_TOKEN, 'SANITY_API_READ_TOKEN');

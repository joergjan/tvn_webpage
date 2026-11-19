import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-vercel';

export default defineConfig({
	plugins: [
		sveltekit({
			adapter: adapter({ runtime: 'nodejs22.x' }),
			alias: { $lib: 'src/lib' },
			version: { pollInterval: 0 }
		}),
		tailwindcss()
	]
});

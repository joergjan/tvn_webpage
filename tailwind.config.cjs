/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],

	theme: {
		extend: {
			colors: {
				tvbluelight: '#375398',
				tvyellow: '#E3BE53'
			}
		}
	},
	plugins: [require('flowbite/plugin')]
};

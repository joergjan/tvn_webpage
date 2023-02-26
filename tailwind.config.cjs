/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				tvbluelight: '#375398',
				tvyellow: '#E3BE53'
			},
			scale: {
				102: '1.02'
			}
		}
	},
	corePlugins: {
		aspectRatio: false
	},
	plugins: [require('@tailwindcss/aspect-ratio'), '@tailwindcss/forms']
};

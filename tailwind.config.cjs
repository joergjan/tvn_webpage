/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				tvbluelight: '#375398',
				tvyellow: '#E3BE53'
			}
		},
		fontFamily: {
			sans: 'Montserrat'
		}
	},
	corePlugins: {
		aspectRatio: false
	},
	plugins: [require('@tailwindcss/aspect-ratio'), '@tailwindcss/forms']
};

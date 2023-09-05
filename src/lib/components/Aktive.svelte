<script>
	import Galery from './Galery.svelte';

	const imageModules = import.meta.glob('$lib/galery/aktive/*');

	/**
	 * @type {any[]}
	 */
	let images = [];

	Promise.all(
		Object.values(imageModules).map((modulePath) =>
			// @ts-ignore
			modulePath().then(({ default: imageUrl }) => imageUrl)
		)
	).then((imageUrls) => {
		images = imageUrls.map((imageUrl, index) => ({
			// @ts-ignore
			src: imageUrl.replace(/^.*\/images/, 'images'),
			no: index
		}));
	});
</script>

<div class="h2 pt-5">Aktive</div>

<Galery photos={images} />

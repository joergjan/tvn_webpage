<script>
	import Galery from './Galery.svelte';

	const imageModules = import.meta.glob('$lib/galery/bolle/*');

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

{#if images.length > 0}
	<Galery photos={images} />
{:else}
	<div>noch keine Bilder verfügbar</div>
{/if}

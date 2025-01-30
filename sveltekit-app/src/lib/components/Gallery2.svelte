<script lang="ts">
	import { onMount } from 'svelte';
	import lightGallery from 'lightgallery';
	import lgThumbnail from 'lightgallery/plugins/thumbnail';
	import lgZoom from 'lightgallery/plugins/zoom';
	import { urlFor } from '$lib/sanity/image';
	import { PUBLIC_LIGHTGALLERY_KEY } from '$env/static/public';

	export let photos: Gallery[] = [];

	let gallery: HTMLElement;

	onMount(() => {
		if (gallery) {
			lightGallery(gallery, {
				plugins: [lgZoom, lgThumbnail],
				speed: 500,
				licenseKey: PUBLIC_LIGHTGALLERY_KEY
			});
		}
	});
</script>

<div bind:this={gallery}>
	{#each photos as { mainImage, title }}
		<a href={urlFor(mainImage).url()} data-lg-size="1600-2400">
			<img alt={title} src={urlFor(mainImage).url()} />
		</a>
	{/each}
</div>

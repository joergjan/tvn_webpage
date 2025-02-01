<script lang="ts">
	import 'lightgallery/css/lightgallery.css';
	import 'lightgallery/css/lg-thumbnail.css';
	import { onMount } from 'svelte';
	import lightGallery from 'lightgallery';
	import lgThumbnail from 'lightgallery/plugins/thumbnail';
	import { browser } from '$app/environment';
	import { Skeleton } from '$lib/components/ui/skeleton';

	import { urlFor } from '$lib/sanity/image';
	import { PUBLIC_LIGHTGALLERY_KEY } from '$env/static/public';

	export let photos: Gallery[] = [];

	let gallery: HTMLElement;

	onMount(() => {
		if (gallery) {
			lightGallery(gallery, {
				plugins: [lgThumbnail],
				licenseKey: PUBLIC_LIGHTGALLERY_KEY,
				speed: 100
			});
		}
	});
</script>

<div>
	<div bind:this={gallery} class="grid grid-cols-4 gap-2 py-3">
		{#each photos as { mainImage, title }}
			{#if browser}
				<a href={urlFor(mainImage).url()}>
					<img
						class="aspect-square rounded-lg object-cover transition-all duration-300 hover:scale-[1.02]"
						alt={title}
						src={urlFor(mainImage).url()}
					/>
				</a>
			{:else}
				<div class="aspect-square h-full w-full">
					<Skeleton class="h-full w-full rounded-lg" />
				</div>
			{/if}
		{/each}
	</div>
</div>

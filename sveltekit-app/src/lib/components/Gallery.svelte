<script lang="ts">
	import 'lightgallery/css/lightgallery.css';
	import 'lightgallery/css/lg-thumbnail.css';
	import { onMount } from 'svelte';
	import lightGallery from 'lightgallery';
	import { browser } from '$app/environment';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { urlFor } from '$lib/sanity/image';
	import { PUBLIC_LIGHTGALLERY_KEY } from '$env/static/public';

	export let photos: Gallery[] = [];

	let gallery: HTMLElement;

	onMount(() => {
		if (gallery) {
			lightGallery(gallery, {
				licenseKey: PUBLIC_LIGHTGALLERY_KEY,
				speed: 100
			});
		}
	});
</script>

<div class="mt-10">
	<div
		bind:this={gallery}
		class="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:gap-5"
	>
		{#each photos as { mainImage, title }}
			{#if browser}
				<a href={urlFor(mainImage).url()} class="group">
					<img
						class="aspect-square rounded-xl object-cover transition-all duration-300 hover:scale-[1.02]"
						alt={title}
						src={urlFor(mainImage).url()}
					/>
				</a>
			{:else}
				<div class="aspect-square h-full w-full">
					<Skeleton class="h-full w-full rounded-xl" />
				</div>
			{/if}
		{/each}
	</div>
</div>

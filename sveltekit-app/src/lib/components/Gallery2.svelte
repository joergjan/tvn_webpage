<script lang="ts">
	import 'lightgallery/css/lightgallery.css';
	import 'lightgallery/css/lg-zoom.css';
	import 'lightgallery/css/lg-thumbnail.css';
	import { onMount } from 'svelte';
	import lightGallery from 'lightgallery';
	import lgThumbnail from 'lightgallery/plugins/thumbnail';
	import lgZoom from 'lightgallery/plugins/zoom';
	import { browser } from '$app/environment';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { AspectRatio } from '$lib/components/ui/aspect-ratio';

	import { urlFor } from '$lib/sanity/image';
	import { PUBLIC_LIGHTGALLERY_KEY } from '$env/static/public';

	export let photos: Gallery[] = [];

	let gallery: HTMLElement;

	onMount(() => {
		if (gallery) {
			lightGallery(gallery, {
				plugins: [lgZoom, lgThumbnail],

				licenseKey: PUBLIC_LIGHTGALLERY_KEY,

				// increasing speed to see the easing correctly
				// Just for the demo purpose
				speed: 100
			});
		}
	});
</script>

<div>
	<div bind:this={gallery} class="grid grid-cols-4 gap-2">
		{#each photos as { mainImage, title }}
			{#if browser}
				<a
					href={urlFor(mainImage).url()}
					data-lg-size={urlFor(mainImage).width + '-' + urlFor(mainImage).height}
				>
					<img
						class="aspect-square rounded-lg object-cover"
						alt={title}
						src={urlFor(mainImage).url()}
					/>
				</a>
			{:else}
				<div class="mx-auto my-3 max-w-2xl rounded-lg bg-white bg-opacity-5 p-3 lg:max-w-4xl">
					<div class="space-y-20 lg:space-y-20">
						<article class="relative isolate flex flex-col gap-8 lg:flex-row">
							<div class="relative aspect-[1/1] h-full w-full">
								<Skeleton class="h-full w-full rounded-lg " />
							</div>
						</article>
					</div>
				</div>
			{/if}
		{/each}
	</div>
</div>

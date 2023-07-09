<script lang="ts">
	import Lightbox from './Lightbox.svelte';
	import { lightboxActive } from '$lib/scripts/stores';
	import { onMount } from 'svelte';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';

	export let photos: { href: string; no: number }[] = [];
	let imageShowIndex = 0;
	let lightboxActiveValue = 0;
	let activeIndex = 0;

	const handleLightboxClose = () => {
		lightboxActive.update((n) => (n = 0));
	};

	lightboxActive.subscribe((value) => {
		lightboxActiveValue = value;
	});

	onMount(() => {
		window.addEventListener('close', handleLightboxClose);
	});

	$: {
		if (lightboxActiveValue == 1) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}
	}
</script>

{#if photos.length != 0}
	<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
		{#each photos as { href, no }}
			<div class="relative">
				<IntersectionObserver animation="unblur">
					<img loading="lazy" class="w-72 h-auto" src={href} alt="" />
				</IntersectionObserver>
				<button
					class="absolute inset-0 hover:bg-opacity-75 transition duration-300"
					on:click={() => {
						imageShowIndex = no;
						activeIndex = no;
						lightboxActive.update((n) => (n = 1));
					}}
				>
					<span class="sr-only">View image {no + 1}</span>
				</button>
			</div>
		{/each}
	</div>

	{#if lightboxActiveValue == 1}
		<Lightbox {photos} {activeIndex} on:close={() => lightboxActive.update((n) => (n = 0))} />
	{/if}
{/if}

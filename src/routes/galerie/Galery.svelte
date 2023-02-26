<script lang="ts">
	import Lightbox from './Lightbox.svelte';
	export let photos: { href: string; no: number }[] = [];
	let imageShowIndex = 0;
	import { lightboxActive } from '$lib/components/stores';

	let lightboxActiveValue = 0;

	lightboxActive.subscribe((value) => {
		lightboxActiveValue = value;
	});
</script>

{#if photos.length != 0}
	{#each photos as { href, no }}
		<button
			on:click={() => {
				imageShowIndex = no;
			}}
			on:click={() => lightboxActive.update((n) => (n = 1))}
		>
			<img src={href} alt="" />
		</button>
	{/each}

	{#if lightboxActiveValue == 1}
		<Lightbox {photos} {imageShowIndex} />
	{/if}
{/if}

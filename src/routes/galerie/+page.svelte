<script lang="ts">
	import LoadAnimation from '$lib/components/LoadAnimation.svelte';
	import Gallery from 'svelte-lightbox-gallery';

	import { galeries } from '$lib/scripts/stores';

	import Actions from './Actions.svelte';
</script>

<svelte:head>
	<title>TVN | Galerie</title>
	<meta
		name="description"
		content="Hier findest du Fotos von Turnfestern, Wettkämpfen, Events, Unterhaltungen und vieles mehr."
	/>
</svelte:head>

<Actions />

<h1 class="h1">Galerie</h1>

<div class="relative min-h-80">
	{#if $galeries.length > 0}
		{#each $galeries as folder}
			<div class="mb-7">
				<h3 class="mb-2">
					{folder.name}
				</h3>
				<Gallery photos={folder.image.map((img) => img.url)} />
			</div>
		{/each}
	{:else}
		<div class="absolute top-1/2 transform -translate-y-1/2 right-0 left-0">
			<LoadAnimation />
		</div>
	{/if}
</div>

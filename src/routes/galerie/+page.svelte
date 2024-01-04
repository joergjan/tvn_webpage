<script>
	import { h3 } from 'lucia/middleware';
	import { onMount } from 'svelte';
	import Galery from '$lib/components/Galery.svelte';

	let imageFolder = [];

	onMount(async () => {
		try {
			const response = await fetch('/api/v1/main/galery/getImages');
			const data = await response.json();
			imageFolder = data.imageFolder;
		} catch (error) {
			console.error('Error:', error);
		}
	});
</script>

<svelte:head>
	<title>TVN | Galerie</title>
	<meta
		name="description"
		content="Hier findest du Fotos von Turnfestern, Wettkämpfen, Events, Unterhaltungen und vieles mehr."
	/>
</svelte:head>

<h1 class="h1">Galerie</h1>

{#each imageFolder as folder}
	<div class="mb-7">
		<h3 class="mb-2">
			{folder.name}
		</h3>
		<Galery photos={folder.image} />
	</div>
{/each}

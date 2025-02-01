<script lang="ts">
	import { urlFor } from '$lib/sanity/image';
	import { breadCrumbTitle } from '$lib/stores';
	import { PUBLIC_LIGHTGALLERY_KEY } from '$env/static/public';
	import lightGallery from 'lightgallery';
	import lgThumbnail from 'lightgallery/plugins/thumbnail';
	import { onMount } from 'svelte';

	let gallery: HTMLElement;
	let { data } = $props();
	let riege = data.riege;

	$effect(() => {
		$breadCrumbTitle = riege.name;
	});

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
	<h1>{riege.name}</h1>

	<div bind:this={gallery} class="relative h-56 w-full">
		{#each riege.image as image}
			<a href={urlFor(image).url()}>
				<img
					src={urlFor(image).url()}
					alt={riege.name}
					class="absolute inset-0 size-full rounded-lg object-cover"
				/>
			</a>
		{/each}
	</div>

	{#each riege.kontaktLeiter as leiter}
		<p>{leiter.fullname}</p>
		<a href="mailto:{leiter.mail}">{leiter.mail}</a>
	{/each}

	<p class="font-semibold">{riege.body}</p>
</div>

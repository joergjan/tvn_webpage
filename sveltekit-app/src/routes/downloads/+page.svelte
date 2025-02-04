<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { getFileAsset } from '@sanity/asset-utils';
	import { dataset, projectId } from '$lib/sanity/api';

	export let data: PageData;
	$: ({ downloads } = data);

	const options = {
		projectId,
		dataset
	};

	onMount(() => {
		console.log(getFileAsset(downloads[0]), options);
	});
</script>

<h1>Downloads</h1>

{#each downloads as { title, url }}
	<div>
		<a href={url} download>
			{title}
		</a>
	</div>
{/each}

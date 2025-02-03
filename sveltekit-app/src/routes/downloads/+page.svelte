<script lang="ts">
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	export let data: PageData;
	$: ({ downloads } = data);

	onMount(() => {
		console.log(downloads);
	});
</script>

<h1>Diese Seite befindet sich in Überarbeitung</h1>

<!-- 

{#each downloads as { title, url }}
	<div>
		<a href={url} download>
			{title}
		</a>
	</div>
{/each}
-->

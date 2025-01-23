<script lang="ts">
	import type { PageData } from './$types';
	import Riege from '$lib/components/riege/RiegeCard.svelte';
	import { riegenDescription } from '$lib/components/SEO';

	export let data: PageData;
	$: ({ riegen } = data);
</script>

<svelte:head>
	<meta name="description" content={riegenDescription} />
</svelte:head>

{#each riegen as riege}
	<Riege {riege} />
{/each}

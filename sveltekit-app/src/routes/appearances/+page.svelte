<script lang="ts">
	import type { PageData } from './$types';
	import AppearancesTable from '$lib/components/AppearancesTable.svelte';
	import { appearancesDescription } from '$lib/components/SEO';

	export let data: PageData;

	$: ({ appearances } = data);
</script>

<svelte:head>
	<meta name="description" content={appearancesDescription} />
</svelte:head>

<AppearancesTable {appearances} />

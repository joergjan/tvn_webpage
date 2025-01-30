<script lang="ts">
	import type { PageData } from './$types';

	import Gallery from '$lib/components/Gallery2.svelte';

	export let data: PageData;

	$: ({ aktive, jugi } = data);
</script>

<h1>Aktive</h1>
<Gallery photos={aktive} />

<h1>Jugi</h1>
<Gallery photos={jugi} />

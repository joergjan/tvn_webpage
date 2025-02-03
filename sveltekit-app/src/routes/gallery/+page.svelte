<script lang="ts">
	import type { PageData } from './$types';
	import Gallery from '$lib/components/Gallery.svelte';
	import Divider from '$lib/components/Divider.svelte';

	export let data: PageData;

	$: ({ aktive, jugi } = data);
</script>

<h1>Aktive</h1>
<Gallery photos={aktive} />
<Divider />

<h1>Jugi</h1>
<Gallery photos={jugi} />

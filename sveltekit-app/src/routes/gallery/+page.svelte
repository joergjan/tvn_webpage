<script lang="ts">
	import type { PageData } from './$types';
	import { contactDescription } from '$lib/components/SEO';

	import Gallery from '$lib/components/Gallery.svelte';

	export let data: PageData;

	$: ({ galerieAktive, galerieJugi } = data);
</script>

<svelte:head>
	<meta name="description" content={contactDescription} />
</svelte:head>

<h1>Aktive</h1>
<Gallery photos={galerieAktive} />

<h1>Jugi</h1>
<Gallery photos={galerieJugi} />

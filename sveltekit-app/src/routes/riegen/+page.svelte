<script lang="ts">
	import type { PageData } from './$types';
	import Riegen from '$lib/components/Riegen.svelte';

	export let data: PageData;
	$: ({ riegen } = data);
</script>

<Riegen {riegen} />

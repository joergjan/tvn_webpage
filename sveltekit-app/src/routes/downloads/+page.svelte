<script lang="ts">
	import type { PageData } from './$types';
	import { getDownloadUrl } from '$lib/utils';
	import { Button } from '$lib/components/ui/button/index.js';
	import Download from 'lucide-svelte/icons/download';
	import Divider from '$lib/components/Divider.svelte';

	export let data: PageData;
	$: ({ downloads } = data);
</script>

<h1>Downloads</h1>

<div class="mt-10">
	<ul role="list">
		{#each downloads as { title, file }, i}
			{#if file}
				<li class="flex items-center justify-between px-4 py-4 sm:px-0">
					<p>{title}</p>
					<p>
						<Button href={getDownloadUrl(file.asset._ref)}>
							<Download class="mr-2 size-4" />Download</Button
						>
					</p>
				</li>
			{/if}
			{#if i < downloads.length - 1}
				<div class="-my-6">
					<Divider />
				</div>
			{/if}
		{/each}
	</ul>
</div>

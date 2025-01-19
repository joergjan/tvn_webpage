<script lang="ts">
	import type { PageData } from './$types';
	import EventsTable from '$lib/components/EventsTable.svelte';
	import Image from '$lib/components/Image.svelte';
	import Blog from '$lib/components/Blog.svelte';
	import About from '$lib/components/About.svelte';
	import { homeDescription } from '$lib/components/SEO';
	import { Skeleton } from '$lib/components/ui/skeleton';

	export let data: PageData;
	$: ({ events, blogPosts } = data);
</script>

<svelte:head>
	<meta name="description" content={homeDescription} />
</svelte:head>

<div class="space-y-10">
	<br />

	{#if events.length > 0}
		<EventsTable {events} />
	{:else}
		<div class="flex items-center space-x-4">
			<Skeleton class="h-12 w-12 rounded-full" />
			<div class="space-y-2">
				<Skeleton class="h-4 w-[250px]" />
				<Skeleton class="h-4 w-[200px]" />
			</div>
		</div>
	{/if}

	<div class="flex items-center space-x-4">
		<Skeleton class="h-12 w-12 rounded-full" />
		<div class="space-y-2">
			<Skeleton class="h-4 w-[250px]" />
			<Skeleton class="h-4 w-[200px]" />
		</div>
	</div>

	<Blog {blogPosts} />
</div>

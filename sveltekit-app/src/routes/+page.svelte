<script lang="ts">
	import type { PageData } from './$types';
	import EventsTable from '$lib/components/EventsTable.svelte';
	import Blog from '$lib/components/Blog.svelte';
	import { homeDescription } from '$lib/components/SEO';

	export let data: PageData;
	$: ({ events, blogPosts } = data);
</script>

<svelte:head>
	<meta name="description" content={homeDescription} />
</svelte:head>

<div class="space-y-10">
	<br />

	<EventsTable {events} />

	<Blog {blogPosts} />
</div>

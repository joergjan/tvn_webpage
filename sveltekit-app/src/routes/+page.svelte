<script lang="ts">
	import type { PageData } from './$types';
	import EventsTable from '$lib/components/EventsTable.svelte';
	import Blog from '$lib/components/Blog.svelte';

	export let data: PageData;
	$: ({ events, blogPosts } = data);
</script>

<div class="space-y-10">
	<br />

	<h2>Anstehende Anlässe</h2>
	<EventsTable {events} />

	<h3>Aus dem Blog</h3>
	<Blog {blogPosts} />
</div>

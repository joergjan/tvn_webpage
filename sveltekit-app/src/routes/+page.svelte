<script lang="ts">
	import type { PageData } from './$types';
	import EventsTable from '$lib/components/EventsTable.svelte';
	import Blog from '$lib/components/Blog.svelte';

	export let data: PageData;
	$: ({ events, blogPosts } = data);
</script>

<div class="space-y-10">
	<br />

	<EventsTable {events} />

	<Blog {blogPosts} />
</div>

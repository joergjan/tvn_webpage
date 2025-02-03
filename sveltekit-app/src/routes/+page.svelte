<script lang="ts">
	import type { PageData } from './$types';
	import EventsTable from '$lib/components/EventsTable.svelte';
	import Blog from '$lib/components/Blog.svelte';

	export let data: PageData;
	$: ({ events, blogPosts } = data);
</script>

<div class="grid gap-20">
	<section>
		<h1>Anstehende Anlässe</h1>
		<EventsTable {events} />
	</section>
	<section>
		<h1>Aus dem Blog</h1>
		<Blog {blogPosts} max={3} />
	</section>
</div>

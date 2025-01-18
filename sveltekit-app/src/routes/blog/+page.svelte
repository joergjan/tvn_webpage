<script lang="ts">
	import type { PageData } from './$types';
	import Blog from '$lib/components/Blog.svelte';
	import { blogDescription } from '$lib/components/SEO';

	export let data: PageData;
	$: ({ blogPosts } = data);
</script>

<svelte:head>
	<meta name="description" content={blogDescription} />
</svelte:head>

<Blog {blogPosts} />

<script lang="ts">
	import type { PageData } from './$types';
	import Blog from '$lib/components/Blog.svelte';

	export let data: PageData;
	$: ({ blogPosts } = data);
</script>

<Blog {blogPosts} />

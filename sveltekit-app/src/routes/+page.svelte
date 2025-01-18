<script lang="ts">
	import type { PageData } from './$types';
	import AppearancesTable from '$lib/components/AppearancesTable.svelte';
	import Image from '$lib/components/Image.svelte';
	import Blog from '$lib/components/Blog.svelte';
	import About from '$lib/components/About.svelte';
	import { homeDescription } from '$lib/components/SEO';

	export let data: PageData;
	$: ({ blogPosts, about, appearances, homeImage } = data);
</script>

<svelte:head>
	<meta name="description" content={homeDescription} />
</svelte:head>

<div class="space-y-10">
	<div class=" flex items-center justify-center rounded-lg object-fill">
		<Image image={homeImage[0]} imageClass={''} />
	</div>

	<About {about} />

	<br />

	<AppearancesTable {appearances} />

	<Blog {blogPosts} />
</div>

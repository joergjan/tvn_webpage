<script lang="ts">
	import type { PageData } from './$types';
	import { blogDescription } from '$lib/components/SEO';
	import { urlFor } from '$lib/sanity/image';
	import { PortableText } from '@portabletext/svelte';
	import { breadCrumbTitle } from '$lib/stores';
	import { onMount } from 'svelte';

	let { data } = $props();
	let blogPost = data.blogPost;

	$effect(() => {
		$breadCrumbTitle = blogPost.title;
	});
</script>

<svelte:head>
	<meta name="description" content={blogDescription} />
</svelte:head>

<div>
	<h1>{blogPost.title}</h1>

	<div class="relative h-56 w-full">
		<img
			src={blogPost.mainImage ? urlFor(blogPost.mainImage).url() : '/favicon.png'}
			alt={blogPost.title}
			class="${blogPost.mainImage
				? ''
				: ' bg-gray-800 '} absolute inset-0 size-full rounded-lg bg-gray-50 object-cover"
		/>
	</div>

	<p class="font-semibold">{blogPost.description}</p>

	<PortableText components={{}} value={blogPost.body} />
</div>

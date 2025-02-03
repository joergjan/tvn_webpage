<script lang="ts">
	import { urlFor } from '$lib/sanity/image';
	import { PortableText } from '@portabletext/svelte';
	import { breadCrumbTitle } from '$lib/stores';
	import { onMount } from 'svelte';
	import { formatDate } from '$lib/utils';
	import { PUBLIC_LIGHTGALLERY_KEY } from '$env/static/public';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { browser } from '$app/environment';
	import lightGallery from 'lightgallery';
	import lgThumbnail from 'lightgallery/plugins/thumbnail';

	let gallery: HTMLElement;
	let { data } = $props();
	let blogPost = data.blogPost;

	$effect(() => {
		$breadCrumbTitle = blogPost.title;
	});

	onMount(() => {
		if (gallery) {
			lightGallery(gallery, {
				plugins: [lgThumbnail],
				licenseKey: PUBLIC_LIGHTGALLERY_KEY,
				speed: 100
			});
		}
	});
</script>

<div class="max-w-4xl">
	<h4>{formatDate(blogPost.date)}</h4>
	<h1>
		{blogPost.title}
	</h1>
	<p class="mt-6 text-balance text-xl/8">
		{blogPost.description}
	</p>
</div>
<section class="mt-8 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
	<div class="lg:pr-8">
		<div class="mt-6 text-base/7">
			<PortableText components={{}} value={blogPost.body} />
		</div>
	</div>
	<div class="pt-16 lg:row-span-2 lg:-mr-16 lg:mt-[-12rem]">
		<div
			bind:this={gallery}
			class="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8"
		>
			{#each blogPost.image as image, i}
				{#if i % 2 === 0}
					{#if browser && image && lgThumbnail}
						<a
							href={urlFor(image).url()}
							class="lg:col-start-2 lg:row-start-{i} aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 transition-all duration-300 hover:scale-[1.02]"
						>
							<img
								alt={blogPost.title}
								src={urlFor(image).url()}
								class="block size-full object-cover"
							/>
						</a>
					{:else}
						<div
							class="lg:col-start-2 lg:row-start-{i} aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 transition-all"
						>
							<Skeleton class="size-full h-full w-full rounded-lg " />
						</div>
					{/if}
				{:else if browser && image}
					<a
						href={urlFor(image).url()}
						class="-mt-12 lg:col-start-1 lg:row-start-{i} aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 transition-all duration-300 hover:scale-[1.02] lg:-mt-40"
					>
						<img
							alt={blogPost.title}
							src={urlFor(image).url()}
							class="block size-full object-cover"
						/>
					</a>
				{:else}
					<div
						class="-mt-12 lg:col-start-1 lg:row-start-{i} aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 transition-all duration-300 hover:scale-[1.02] lg:-mt-40"
					>
						<Skeleton class="h-full w-full rounded-lg " />
					</div>
				{/if}
			{/each}
		</div>
	</div>
</section>

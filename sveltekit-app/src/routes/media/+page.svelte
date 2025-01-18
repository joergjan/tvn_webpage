<script lang="ts">
	import { mediaDescription } from '$lib/components/SEO';
	import type { PageData } from './$types';

	export let data: PageData;

	$: ({ videos, youtube } = data);
</script>

<svelte:head>
	<meta name="description" content={mediaDescription} />
</svelte:head>

{#if youtube.length}
	<ul role="list" class="grid grid-cols-1 gap-x-5 gap-y-8 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8">
		{#each youtube as { link, title }}
			<li class="relative rounded-lg bg-white bg-opacity-5 p-3">
				<h2 class="text-md pb-2 font-bold">{title}</h2>
				<div class="aspect-w-16 aspect-h-12 group overflow-hidden rounded-lg">
					<iframe
						class="h-64 w-full"
						src={link}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen
					></iframe>
				</div>
			</li>
		{/each}
	</ul>
{/if}

<br />

{#if videos.length}
	<ul role="list" class="grid grid-cols-1 gap-x-5 gap-y-8 sm:gap-x-6 lg:grid-cols-2 xl:gap-x-8">
		{#each videos as { url, title }}
			<li class="relative rounded-lg bg-white bg-opacity-5 p-3">
				<h2 class="text-md pb-2 font-bold">{title}</h2>
				<div class="group overflow-hidden rounded-lg">
					<!-- svelte-ignore a11y-media-has-caption -->
					<video controls>
						<source src={url} type="video/mp4" />
						Your browser does not support the video tag.
					</video>
				</div>
			</li>
		{/each}
	</ul>
{/if}

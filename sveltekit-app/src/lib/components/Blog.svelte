<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/sanity/image';
	import { Button } from '$lib/components/ui/button';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { browser } from '$app/environment';
	import Avatar from '$lib/components/Avatar.svelte';
	import Divider from './Divider.svelte';

	export let blogPosts: BlogPost[];
	export let max: number = 0;

	let posts = max > 0 ? blogPosts.slice(0, max) : blogPosts;
</script>

<div class="pt-10">
	{#if posts.length}
		<div
			class="mx-auto grid grid-cols-1 gap-2 sm:gap-3 md:gap-4 lg:gap-5 lg:gap-y-10 xl:grid-cols-2"
		>
			{#each posts as { title, image, description, date, _id }, i}
				<a href={'/blog/' + _id}>
					<article class="relative isolate flex flex-col gap-8 lg:flex-row">
						<div
							class=" relative aspect-video sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0"
						>
							{#if browser && image[0]}
								<img
									src={image[0] ? urlFor(image[0]).url() : '/favicon.png'}
									alt={title}
									class="absolute inset-0 size-full rounded-xl object-cover"
								/>
							{:else}
								<div class="aspect-square h-full w-full">
									<Skeleton class="h-full w-full rounded-xl" />
								</div>
							{/if}
						</div>
						<div>
							<div class="text-tvbluelight flex items-center gap-x-4 text-sm">
								<time datetime="2020-03-16" class="">{formatDate(date)}</time>
							</div>
							<div class="group relative max-w-xl">
								<h3 class="mt-3 text-lg/6 font-semibold">
									<span class="absolute inset-0"></span>
									{title}
								</h3>
								<p class="mt-5 text-sm/6">
									{description}
								</p>
							</div>
						</div>
					</article>
				</a>

				{#if i < posts.length - 1}
					<div class="-mb-5 -mt-3 block lg:hidden">
						<Divider />
					</div>
				{/if}
			{/each}
		</div>
	{/if}
</div>

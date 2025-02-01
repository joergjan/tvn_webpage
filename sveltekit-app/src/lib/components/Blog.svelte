<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/sanity/image';
	import { Button } from '$lib/components/ui/button';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { browser } from '$app/environment';
	import Avatar from '$lib/components/Avatar.svelte';

	export let blogPosts: BlogPost[];
</script>

<div class="">
	{#if blogPosts.length}
		{#each blogPosts as { title, image, description, date, _id }}
			<div class="mx-auto my-3 max-w-2xl rounded-lg bg-white bg-opacity-5 p-3 lg:max-w-4xl">
				<a href={'/blog/' + _id}>
					<div class="space-y-20 lg:space-y-20">
						<article class="relative isolate flex flex-col gap-8 lg:flex-row">
							<div
								class=" relative aspect-video sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0"
							>
								{#if browser && image[0]}
									<img
										src={image[0] ? urlFor(image[0]).url() : '/favicon.png'}
										alt={title}
										class="absolute inset-0 size-full rounded-lg object-cover"
									/>
								{:else}
									<div class="aspect-square h-full w-full">
										<Skeleton class="h-full w-full rounded-lg" />
									</div>
								{/if}
							</div>
							<div>
								<div class="flex items-center gap-x-4 text-xs">
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
					</div>
				</a>
			</div>
		{/each}
	{/if}
</div>

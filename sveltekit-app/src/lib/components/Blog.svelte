<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { ExternalLink } from 'lucide-svelte';
	import { urlFor } from '$lib/sanity/image';
	import { Button } from '$lib/components/ui/button';

	export let blogPosts: BlogPost[];
</script>

<div class="">
	{#if blogPosts.length}
		{#each blogPosts as { title, description, date, mainImage, _id }}
			<div class="mx-auto my-3 max-w-2xl rounded-lg bg-white bg-opacity-5 p-3 lg:max-w-4xl">
				<a href={'/blog/' + _id}>
					<div class="space-y-20 lg:space-y-20">
						<article class="relative isolate flex flex-col gap-8 lg:flex-row">
							<div
								class=" relative aspect-video sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0"
							>
								<img
									src={mainImage ? urlFor(mainImage).url() : '/favicon.png'}
									alt={title}
									class="${mainImage
										? ''
										: ' bg-gray-800 '} absolute inset-0 size-full rounded-lg bg-gray-50 object-cover"
								/>
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

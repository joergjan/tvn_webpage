<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { ExternalLink } from 'lucide-svelte';
	import { urlFor } from '$lib/sanity/image';
	import { Button } from '$lib/components/ui/button';
	import { page } from '$app/stores';

	export let blogPosts: BlogPost[];
</script>

<div class="">
	{#if blogPosts.length}
		{#each blogPosts as { title, body, date, mainImage }}
			<div class="mx-auto my-3 max-w-2xl rounded-lg bg-white bg-opacity-5 p-3 lg:max-w-4xl">
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
								<time datetime="2020-03-16" class="text-gray-200">{formatDate(date)}</time>
							</div>
							<div class="group relative max-w-xl">
								<h3 class="mt-3 text-lg/6 font-semibold text-gray-200 group-hover:text-gray-300">
									<span class="absolute inset-0"></span>
									{title}
								</h3>
								<p class="mt-5 text-sm/6 text-gray-300">
									{body}
								</p>
							</div>
						</div>
					</article>
				</div>
			</div>
		{/each}
		{#if !$page.url.pathname.includes('blog')}
			<div class="flex items-center justify-center pt-7">
				<Button href="/blog">
					<p class="pr-2">Alle Blogeinträge</p>
					<ExternalLink />
				</Button>
			</div>
		{/if}
	{/if}
</div>

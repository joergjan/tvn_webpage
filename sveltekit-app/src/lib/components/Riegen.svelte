<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/sanity/image';
	import { Button } from '$lib/components/ui/button';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { browser } from '$app/environment';

	export let riegen: Riege[];
</script>

<div class="">
	{#if riegen.length}
		{#each riegen as { name, mainImage, description, age, _id }}
			{#if browser}
				<div class="mx-auto my-3 max-w-2xl rounded-lg bg-white bg-opacity-5 p-3 lg:max-w-4xl">
					<a href={'/riegen/' + _id}>
						<div class="space-y-20 lg:space-y-20">
							<article class="relative isolate flex flex-col gap-8 lg:flex-row">
								<div
									class=" relative aspect-video sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0"
								>
									<img
										src={mainImage ? urlFor(mainImage).url() : '/favicon.png'}
										alt={name}
										class="${mainImage
											? ''
											: ' bg-gray-800 '} absolute inset-0 size-full rounded-lg bg-gray-50 object-cover"
									/>
								</div>
								<div>
									<div class="flex items-center gap-x-4 text-xs">
										<p>{age}</p>
									</div>
									<div class="group relative max-w-xl">
										<h3 class="mt-3 text-lg/6 font-semibold">
											<span class="absolute inset-0"></span>
											{name}
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
			{:else}
				<div class="mx-auto my-3 max-w-2xl rounded-lg bg-white bg-opacity-5 p-3 lg:max-w-4xl">
					<div class="space-y-20 lg:space-y-20">
						<article class="relative isolate flex flex-col gap-8 lg:flex-row">
							<div
								class=" relative aspect-video sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0"
							>
								<Skeleton class="h-full w-full rounded-full bg-gray-300" />
							</div>
							<div class="space-y-5">
								<Skeleton class="h-[55px] w-[200px] rounded-full bg-gray-300" />
								<Skeleton class="h-[100px] w-[550px] rounded-full bg-gray-300" />
							</div>
						</article>
					</div>
				</div>
			{/if}
		{/each}
	{/if}
</div>

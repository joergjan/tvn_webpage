<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/sanity/image';
	import { Button } from '$lib/components/ui/button';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { browser } from '$app/environment';
	import PersonBadge from '$lib/components/PersonBadge.svelte';
	import Divider from './Divider.svelte';

	export let riegen: Riege[];
</script>

<div class="mt-10">
	{#if riegen.length}
		<div
			class="grid grid-cols-1 gap-2 gap-y-10 sm:gap-3 md:grid-cols-2 md:gap-5 md:gap-y-10 lg:grid-cols-3"
		>
			{#each riegen as { name, image, description, age, _id, kontaktLeiter }, i}
				<div>
					<a class="flex flex-col items-start justify-between" href={'/riegen/' + _id}>
						<div class="relative w-full">
							{#if browser && image[0]}
								<img
									src={urlFor(image[0]).url()}
									alt={name}
									class="aspect-video w-full rounded-xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
								/>
							{:else}
								<div class="aspect-video h-full w-full sm:aspect-[2/1] lg:aspect-[3/2]">
									<Skeleton class="h-full w-full rounded-xl" />
								</div>
							{/if}
						</div>

						<div class="w-full">
							<div class="text-tvbluelight mt-5 items-center gap-x-4 text-sm">
								<p class="text-center">{age}</p>
							</div>
							<div class="group relative text-center">
								<h3 class="mt-3 text-lg/6 font-semibold">
									{name}
								</h3>
							</div>
						</div>
					</a>
					{#if i < riegen.length - 1}
						<div class="-mb-5 -mt-3 block md:hidden">
							<Divider />
						</div>
					{/if}
				</div>
			{/each}
		</div>
	{/if}
</div>

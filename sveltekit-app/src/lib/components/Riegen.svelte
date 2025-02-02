<script lang="ts">
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/sanity/image';
	import { Button } from '$lib/components/ui/button';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { browser } from '$app/environment';
	import PersonBadge from '$lib/components/PersonBadge.svelte';

	export let riegen: Riege[];
</script>

{#if riegen.length}
	<div
		class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3"
	>
		{#each riegen as { name, image, description, age, _id, kontaktLeiter }}
			<a class="flex flex-col items-start justify-between" href={'/riegen/' + _id}>
				<div class="relative w-full">
					{#if browser && image[0]}
						<img
							src={urlFor(image[0]).url()}
							alt={name}
							class="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
						/>
					{:else}
						<div class="aspect-video h-full w-full sm:aspect-[2/1] lg:aspect-[3/2]">
							<Skeleton class="h-full w-full rounded-2xl" />
						</div>
					{/if}
				</div>

				<div class="w-full">
					<div class="text-tvbluelight mt-5 items-center gap-x-4 text-xs">
						<p class="text-center">{age}</p>
					</div>
					<div class="group relative text-center">
						<h3 class="group-hover: mt-3 text-lg/6 font-semibold">
							{name}
						</h3>
					</div>
					<!--
					<div class="relative mt-8 items-center">
						{#each kontaktLeiter as { fullname, mail, mainImage }}
							<PersonBadge {fullname} {mail} {mainImage} />
						{/each}
					</div>
					-->
				</div>
			</a>
		{/each}
	</div>
{/if}

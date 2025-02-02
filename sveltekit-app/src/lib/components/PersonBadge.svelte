<script lang="ts">
	import { urlFor } from '$lib/sanity/image';
	import { browser } from '$app/environment';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import Avatar from '$lib/components/Avatar.svelte';

	export let fullname: string;
	export let mail: string;
	export let mainImage;
</script>

<div class="flex items-center gap-x-4 pb-2">
	<div class="aspect-square h-10">
		{#if browser}
			{#if mainImage}
				<img src={urlFor(mainImage).url()} alt={fullname} class="rounded-full object-cover" />
			{:else}
				<Avatar />
			{/if}
		{:else}
			<div class="aspect-square h-full w-full">
				<Skeleton class="h-full w-full rounded-full" />
			</div>
		{/if}
	</div>

	<div class="text-sm/6">
		<p class="font-semibold">
			{fullname}
		</p>
		<a href={'mailto:' + mail}> <p class="">{mail}</p></a>
	</div>
</div>

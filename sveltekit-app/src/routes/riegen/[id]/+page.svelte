<script lang="ts">
	import 'lightgallery/css/lightgallery.css';
	import 'lightgallery/css/lg-thumbnail.css';
	import { urlFor } from '$lib/sanity/image';
	import { breadCrumbTitle } from '$lib/stores';
	import { PUBLIC_LIGHTGALLERY_KEY } from '$env/static/public';
	import lightGallery from 'lightgallery';
	import lgThumbnail from 'lightgallery/plugins/thumbnail';
	import { onMount } from 'svelte';
	import PersonBadge from '$lib/components/PersonBadge.svelte';
	import { browser } from '$app/environment';
	import { Skeleton } from '$lib/components/ui/skeleton';

	let gallery: HTMLElement;
	let { data } = $props();
	let riege = data.riege;
	console.log(riege.training);

	$effect(() => {
		$breadCrumbTitle = riege.name;
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

<div class="grid grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:grid-cols-2">
	<div>
		<div class="text-base/7 lg:max-w-lg">
			<h4>{riege.age}</h4>
			<h1>
				{riege.name}
			</h1>
			<div class="max-w-xl">
				<p class="mt-6">
					{riege.body}
				</p>
			</div>
		</div>

		<div class="mt-10 gap-8 border-t pt-10">
			<h3 class="mb- -mt-0">Trainingszeiten</h3>
			{#each riege.training as { start, end, day }}
				<div class="flex items-center gap-x-4">
					<p>{day}s, {start} - {end} Uhr</p>
				</div>
			{/each}
		</div>

		<dl class="mt-10 gap-8 border-t pt-10">
			<h3 class="mb- -mt-0">Leiter</h3>
			{#each riege.kontaktLeiter as { fullname, mail, mainImage }}
				<PersonBadge {fullname} {mail} {mainImage} />
			{/each}
		</dl>
	</div>

	<div class="pt-16 lg:row-span-2 lg:-mr-16 lg:pt-48">
		<div
			bind:this={gallery}
			class="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8"
		>
			{#each riege.image as image, i}
				{#if i % 2 === 0}
					{#if browser && image && lgThumbnail}
						<a
							href={urlFor(image).url()}
							class="-mt-12 lg:col-start-1 lg:row-start-{i} aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 transition-all duration-300 hover:scale-[1.02] lg:-mt-40"
						>
							<img
								alt={riege.name}
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
						class="lg:col-start-2 lg:row-start-{i} aspect-square overflow-hidden rounded-xl shadow-xl outline outline-1 -outline-offset-1 outline-black/10 transition-all duration-300 hover:scale-[1.02]"
					>
						<img alt={riege.name} src={urlFor(image).url()} class="block size-full object-cover" />
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
</div>

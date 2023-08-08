<script lang="ts">
	import Lightbox from './Lightbox.svelte';
	import { lightboxActive } from '$lib/scripts/stores';
	import { onMount } from 'svelte';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';

	export let photos: { href: string; no: number }[] = [];
	let imageShowIndex = 0;
	let lightboxActiveValue = 0;
	let activeIndex = 0;

	function randomTimer() {
		return Math.floor(Math.random() * 5);
	}

	const handleLightboxClose = () => {
		lightboxActive.update((n) => (n = 0));
	};

	lightboxActive.subscribe((value) => {
		lightboxActiveValue = value;
	});

	onMount(() => {
		window.addEventListener('close', handleLightboxClose);
	});

	$: {
		if (lightboxActiveValue == 1) {
			document.body.classList.add('overflow-hidden');
		} else {
			document.body.classList.remove('overflow-hidden');
		}
	}
</script>

{#if photos.length != 0}
	<ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-rows-auto">
		{#each photos as { href, no }}
			<li class="relative hover:scale-102 h-48">
				<IntersectionObserver animation="fade-in" timer={randomTimer()}>
					<div>
						<img
							loading="lazy"
							class="block h-48 w-full rounded-md shadow-md object-cover object-center"
							src={href}
							alt=""
						/>
					</div>
					<div class="opacity-0 pointer-events-none !hover:opacity-100 w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-3xl text-white bold">vergrössern</div>
				</IntersectionObserver>
				<button
					class="absolute inset-0 hover:bg-opacity-75 transition duration-300"
					on:click={() => {
						imageShowIndex = no;
						activeIndex = no;
						lightboxActive.update((n) => (n = 1));
					}}
				>
					<span class="sr-only">View image {no + 1}</span>
				</button>
			</li>
		{/each}
	</ul>

	{#if lightboxActiveValue == 1}
		<Lightbox {photos} {activeIndex} on:close={() => lightboxActive.update((n) => (n = 0))} />
	{/if}
{/if}

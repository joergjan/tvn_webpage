<script lang="ts">
	import { onMount } from 'svelte';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';

	export let photos: { src: string; no: number }[] = [];
	let lightboxActive = false;
	let activeIndex = 0;
	let showMore = false;

	function randomTimer() {
		return Math.floor(Math.random() * 5);
	}

	$: {
		if (lightboxActive) {
			onMount(() => {
				document.body.classList.add('overflow-hidden');
			});
		} else {
			onMount(() => {
				document.body.classList.remove('overflow-hidden');
			});
		}
	}

	function close() {
		activeIndex = -1;
		lightboxActive = false;
	}

	onMount(() => {
		window.addEventListener('keyup', (event) => {
			if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
				prev();
			}
			if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
				next();
			}
			if (event.key === 'Escape') {
				close();
			}
		});
	});

	function prev() {
		activeIndex--;
		if (activeIndex < 0) {
			activeIndex = photos.length - 1;
		}
	}

	function next() {
		activeIndex++;
		if (activeIndex >= photos.length) {
			activeIndex = 0;
		}
	}
</script>

{#if photos.length != 0}
	<ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 grid-rows-auto">
		{#each photos.slice(0, showMore ? photos.length : 4) as { src, no }}
			<li class="relative hover:scale-102 h-48">
				<IntersectionObserver animation="fade-in" timer={randomTimer()}>
					<div>
						<img
							loading="lazy"
							class="block h-48 w-full rounded-md shadow-md object-cover object-center"
							{src}
							alt=""
						/>
					</div>
					<div
						class="opacity-0 pointer-events-none !hover:opacity-100 w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-3xl text-white bold"
					>
						vergrössern
					</div>
				</IntersectionObserver>
				<button
					class="absolute inset-0 hover:bg-opacity-75 transition duration-300"
					on:click={() => {
						activeIndex = no;
						lightboxActive = true;
					}}
				>
					<span class="sr-only">View image {no + 1}</span>
				</button>
			</li>
		{/each}
	</ul>

	{#if photos.length > 4}
		{#if !showMore}
			<button
				class="my-4 button-gray px-2 py-1"
				on:click={() => {
					showMore = true;
				}}
			>
				alle anzeigen

				<svg
					class={'h-6 w-6 ml-1 -mr-1'}
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						fill-rule="evenodd"
						d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
						clip-rule="evenodd"
					/>
				</svg>
			</button>
		{/if}
	{/if}
{/if}

{#if lightboxActive}
	<div class="relative z-10" in:fade>
		<div
			class="fixed top-0 left-0 w-screen h-screen bg-black backdrop-blur-md bg-opacity-80 z-30 transition-opacity duration-300 {activeIndex >=
			0
				? 'block'
				: 'hidden'}"
		/>
		<div class="fixed top-0 left-0 w-screen h-screen z-40">
			<div class="absolute inset-0 flex items-center justify-center">
				<img
					loading="lazy"
					src={photos[activeIndex]?.src}
					alt=""
					class="max-w-full lg:max-w-3xl md:max-w-2xl max-h-[90%] md:max-h-full rounded-sm md:rounded-md md:pb-0 pb-32 shadow-lg"
				/>
				<button
					class="absolute md:top-5 md:right-5 md:bottom-auto sm:bottom-12 bottom-24 text-3xl m-4 text-white hover:text-gray-400"
					on:click={close}>&#x2715</button
				>
				<button
					class="absolute md:bottom-1/2 md:left-0 sm:bottom-12 bottom-24 left-4 m-4 text-white hover:text-gray-400 text-3xl"
					on:click={prev}>&#x2329;</button
				>
				<button
					class="absolute md:bottom-1/2 md:right-0 sm:bottom-12 bottom-24 right-4 m-4 text-white hover:text-gray-400 text-3xl"
					on:click={next}
				>
					&#x232a;
				</button>
			</div>
		</div>
	</div>
{/if}

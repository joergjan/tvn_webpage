<script>
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	export let photos = [];
	export let activeIndex = 0;

	const dispatch = createEventDispatcher();

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

	function close() {
		activeIndex = -1;
		dispatch('close');
	}
</script>

<div class="relative z-10" in:fade>
	<div
		class="fixed top-0 left-0 w-screen h-screen bg-black backdrop-blur-sm bg-opacity-80 z-30 transition-opacity duration-300 {activeIndex >=
		0
			? 'block'
			: 'hidden'}"
	/>
	<div class="fixed top-0 left-0 w-screen h-screen z-40">
		<div class="absolute inset-0 flex items-center justify-center">
			<img
				src={photos[activeIndex]?.href}
				alt=""
				class="max-w-full max-h-full rounded-md pb-32 shadow-lg"
			/>
			<button
				class="absolute sm:top-5 sm:right-5 sm:bottom-auto bottom-24 text-3xl m-4 text-white hover:text-gray-400"
				on:click={close}>&#x2715</button
			>
			<button
				class="absolute sm:bottom-1/2 sm:left-0 bottom-24 left-4 m-4 text-white hover:text-gray-400 text-3xl"
				on:click={prev}>&#x2329;</button
			>
			<button
				class="absolute sm:bottom-1/2 sm:right-0 bottom-24 right-4 m-4 text-white hover:text-gray-400 text-3xl"
				on:click={next}
			>
				&#x232a;
			</button>
		</div>
	</div>
</div>

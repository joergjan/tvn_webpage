<script lang="ts">
	import { fade } from 'svelte/transition';
	import { createLoadObserver } from './util'; // utility function to create a load observer (if image has loaded or not)

	import Loader from './Loader.svelte'; // Loading animation

	export let dark: boolean; // dark mode
	export let src: string; // image url
	export let alt: string; // image alt text
	export let title: string; // image title

	let loaded: boolean = false; // checks if image has loaded

	// checks if image has loaded
	const onload = createLoadObserver(() => {
		loaded = true;
	});
</script>

<!-- this component shows an animation while the image is loading and then proceeds to show the image -->

{#if !loaded}
	<div class="h-48">
		<Loader {dark} />
	</div>
{:else}
	<div>
		<img
			in:fade
			{src}
			alt=""
			class="max-h-[90%] max-w-full rounded-sm pb-32 md:max-h-full md:max-w-2xl md:rounded-md md:pb-0 lg:max-w-3xl"
		/>
		<p class="flex items-center justify-center pt-2 font-medium">{title}</p>
	</div>
{/if}

<img
	use:onload
	hidden
	{src}
	srcset="{src} 480w, {src} 800w"
	sizes="(max-width: 600px) 480px, 800px"
	{alt}
/>

<style>
	img {
		pointer-events: none;
	}
</style>

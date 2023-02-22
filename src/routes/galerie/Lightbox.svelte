<script lang="ts">
	import Slide from './Slide.svelte';
	import { lightboxActive } from '$lib/components/stores';

	export let photos: { href: string; no: number }[] = [];
	export let imageShowIndex = 0;
	let lightboxActiveValue = 0;

	lightboxActiveValue;

	$: lightboxActive.subscribe((value) => {
		lightboxActiveValue = value;
	});

	function previousSlide() {
		if (imageShowIndex != 0) {
			imageShowIndex--;
		} else {
			imageShowIndex = photos.length - 1;
		}
	}

	function nextSlide() {
		if (imageShowIndex != photos.length - 1) {
			imageShowIndex++;
		} else {
			imageShowIndex = 0;
		}
	}
</script>

<div class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
	<!--
	  Background backdrop, show/hide based on modal state.
  
	  Entering: "ease-out duration-300"
		From: "opacity-0"
		To: "opacity-100"
	  Leaving: "ease-in duration-200"
		From: "opacity-100"
		To: "opacity-0"
	-->
	<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

	<div class="fixed inset-0 z-10 overflow-y-auto">
		<button on:click={() => lightboxActive.update((n) => (n = 0))} class="absolute top-10 right-10"
			>╳
		</button>
		<div class="min-h-screen">
			<div class="relative max-w-2xl">
				<div class="pt-40">
					{#each photos as { href, no }}
						<Slide
							imgUrl={href}
							slideNo={no}
							totalSlides={photos.length}
							imageShowing={no === imageShowIndex}
						/>
					{/each}
				</div>
				<button class="prevImg" on:click={previousSlide}>&#10094;</button>
				<button class="nextImg" on:click={nextSlide}>&#10095;</button>
			</div>

			<div class="flex">
				{#each photos as { href, no }}
					<div class="w-[16%]">
						<button
							on:click={() => {
								imageShowIndex = no;
							}}
							class="opacity-50"
							class:thumbnailImage={no === imageShowIndex}
						>
							<img src={href} alt="The Woods" />
						</button>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

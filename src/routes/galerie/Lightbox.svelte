<script lang="ts">
	import { lightboxActive } from '$lib/components/stores';

	export let photos: { href: string; no: number }[] = [];
	export let imageShowIndex = 0;

	$: $lightboxActive;

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

<div class="relative z-50 h-screen">
	<div class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />

	<div class="fixed top-20 z-10 overflow-y-auto">
		<button on:click={() => ($lightboxActive = 0)} class="absolute top-10 right-10">╳ </button>
		<div class="max-h-screen overflow-hidden">
			<div class="relative max-w-2xl">
				<div>
					{#each photos as { href, no }}
						{#if no === imageShowIndex}
							<div class="relative">
								<div class="text-white bg-gray-700 opacity-30 font-sm p-2 absolute top-0">
									{no + 1} / {photos.length}
								</div>
								<img id="image" src={href} alt="" />
							</div>
						{/if}
					{/each}
				</div>
				<button class="prevImg" on:click={previousSlide}>&#10094;</button>
				<button class="nextImg" on:click={nextSlide}>&#10095;</button>
			</div>

			<div class="">
				<div class="flex">
					{#each photos as { href, no }}
						<div class="w-[16%]">
							<button
								on:click={() => {
									imageShowIndex = no;
								}}
								class={no === imageShowIndex ? 'thumbnailImage' : 'opacity-70'}
							>
								<img src={href} class="max-h-[5%]" alt="The Woods" />
							</button>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

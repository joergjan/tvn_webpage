<script lang="ts">
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

<div class="relative z-50 h-screen" aria-labelledby="modal-title" role="dialog" aria-modal="true">
	<div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />

	<div class="fixed inset-0 z-10 overflow-y-auto">
		<button on:click={() => lightboxActive.update((n) => (n = 0))} class="absolute top-10 right-10"
			>╳
		</button>
		<div class="max-h-screen overflow-hidden">
			<div class="">
				<div class="relative max-w-2xl">
					<div class="h-2/3">
						{#each photos as { href, no }}
							<div class="hidden" class:showImage={no === imageShowIndex}>
								<div class="relative">
									<div class="text-white bg-gray-700 opacity-30 font-sm p-2 absolute top-0">
										{no + 1} / {photos.length}
									</div>
									<img id="image" src={href} alt="" />
								</div>
							</div>
						{/each}
					</div>
					<button class="prevImg" on:click={previousSlide}>&#10094;</button>
					<button class="nextImg" on:click={nextSlide}>&#10095;</button>
				</div>
			</div>

			<div class="">
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
								<img src={href} class="max-h-[5%]" alt="The Woods" />
							</button>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

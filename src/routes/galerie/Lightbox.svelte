<script lang="ts">
	import { lightboxActive } from '$lib/components/stores';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';

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

	<div class="fixed top-0 overflow-y-auto">
		<div class="flex min-h-full items-end">
			<button
				on:click={() => ($lightboxActive = 0)}
				class="absolute top-10 right-10 text-white hover:text-gray-300"
				>╳
			</button>
			<div class="flex items-center justify-center">
				<div class="">
					<div class="relative max-w-2xl">
						<div>
							{#each photos as { href, no }}
								<IntersectionObserver once={true} let:intersecting>
									{#if no === imageShowIndex}
										<div class="relative">
											<div class="text-white bg-gray-700 opacity-30 font-sm p-2 absolute top-0">
												{no + 1} / {photos.length}
											</div>
											<img id="image" src={href} alt="" />
										</div>
									{/if}
								</IntersectionObserver>
							{/each}
						</div>
						<button
							class="absolute top-[42%] p-5 text-white hover:bg-gray-300 hover:opacity-50 text-lg bg-gray-700 opacity-30 rounded-r-lg"
							on:click={previousSlide}>&#10094;</button
						>
						<button
							class="absolute top-[42%] p-5 right-0 text-white hover:bg-gray-300 hover:opacity-50 text-lg bg-gray-700 opacity-30 rounded-l-lg"
							on:click={nextSlide}>&#10095;</button
						>
					</div>

					<div class="">
						<div class="flex">
							{#each photos as { href, no }}
								<div class="w-[16%]">
									<button
										on:click={() => {
											imageShowIndex = no;
										}}
										class={no === imageShowIndex ? 'opacity-100' : 'opacity-70'}
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
	</div>
</div>

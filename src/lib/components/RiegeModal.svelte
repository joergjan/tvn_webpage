<script>
	import { createEventDispatcher } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	import { currentPage } from '$lib/components/stores';
	const dispatch = createEventDispatcher();
	export let close = false;

	export let name = '';
	export let time1 = '';
	export let day1 = '';
	export let time2 = '';
	export let day2 = '';
	export let twodays = false;
	export let age = '';
	export let description = '';
	export let imageUrl = '';
	export let imageUrl2 = '';
	export let imageUrl3 = '';
	export let leiterName = '';
	export let leiterImageUrl = '';
	let active = 0;

	let images = [imageUrl, imageUrl2, imageUrl3];

	function handleClick() {
		close = true;
		dispatch('close', close);
		clearInterval(interval);
	}

	const interval = setInterval(() => {
		if (active === images.length - 1) {
			active = 0;
		} else {
			active++;
		}
	}, 5000);
</script>

<div class="relative z-10" in:fade aria-labelledby="modal-title" role="dialog" aria-modal="true">
	<div class="fixed inset-0 bg-gray-500 bg-opacity-80 transition-opacity" />
	<slot />
	<div class="fixed inset-0 overflow-y-auto">
		<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
			<div
				class="relative transform overflow-hidden rounded-lg bg-white  text-left shadow-xl transition-all  sm:w-full sm:max-w-3xl"
			>
				<div in:slide class="relative">
					{#each images as image, i}
						{#if i === active}
							<img
								class="sm:max-h-96 sm:h-auto h-48 w-full rounded-t-lg object-cover"
								src={image}
								alt={name}
							/>
						{/if}

						<div class="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex">
							{#each images as image, i}
								<button
									on:click={() => {
										active = i;
									}}
								>
									<div
										class="flex items-center justify-center w-3 h-3 rounded-full bg-gray-500 bg-opacity-30 mx-1"
									>
										{#if i === active}
											<div class="w-full h-full rounded-full bg-white bg-opacity-30" />
										{/if}
									</div>
								</button>
							{/each}
						</div>
					{/each}
				</div>

				<div class="flex flex-1 flex-col p-6">
					<div class="flex-1">
						<div class="text-sm text-tvbluelight">
							{age}
						</div>
						<div class="h4 py-1">
							{name}
						</div>
						<div class="mt-1 text-gray-500">
							{description}
						</div>
					</div>
					<div class="pt-3 bold text-sm text-gray-800">Trainingszeiten</div>
					<div class="pt-1 text-sm">
						<div>{day1}: {time1}</div>
						{#if twodays}
							<div>{day2}: {time2}</div>
						{/if}
					</div>
					<div class="mt-3 flex items-center">
						<div>
							<img class="h-10 w-10 rounded-full" src={leiterImageUrl} alt={leiterName} />
						</div>

						<div class="ml-3">
							<button
								on:click={() => {
									$currentPage++;
								}}
							>
								<a href="/kontakt">
									<div class="text-sm text-gray-900">
										<div>{leiterName}</div>
									</div>
								</a>
							</button>
						</div>
					</div>
					<div class="absolute top-0 right-0 h-12 w-12 ">
						<div class=" bg-black h-full w-full opacity-60 rounded-bl-lg" />
						<button
							class="absolute top-3 right-4 text-gray-200 hover:text-gray-400"
							on:click={() => {
								handleClick();
							}}>╳</button
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

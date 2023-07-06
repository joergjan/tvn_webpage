<script>
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import { currentPage } from '$lib/scripts/stores';
	const dispatch = createEventDispatcher();
	import { personen } from '$lib/scripts/personen';

	/**
	 * @type {any[]}
	 */
	let leiter = [];
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
	export let riegeId = 0;
	let active = 0;

	let images = [imageUrl, imageUrl2, imageUrl3];
	let imagesLength = 3;

	for (let i = 0; i < images.length; i++) {
		if (images[i] == '') {
			imagesLength--;
		}
	}

	function handleClick() {
		close = true;
		dispatch('close', close);
		clearInterval(interval);
	}

	const interval = setInterval(() => {
		if (imagesLength > 1) {
			if (active === images.length - 1) {
				active = 0;
			} else {
				active++;
			}
		}
	}, 5000);

	function nextPicture() {
		if (active === images.length - 1) {
			active = 0;
		} else {
			active++;
		}
	}

	function previousPicture() {
		if (active === 0) {
			active = images.length - 1;
		} else {
			active--;
		}
	}

	for (const person of personen) {
		if (riegeId == person.riegeId) {
			leiter.push(person);
		}
		if (riegeId == person.riege2Id) {
			leiter.push(person);
		}
		if (riegeId == person.riege3Id) {
			leiter.push(person);
		}
	}
</script>

<div
	class="relative z-10 "
	in:fade={{ duration: 300 }}
	aria-labelledby="modal-title"
	role="dialog"
	aria-modal="true"
>
	<div
		class="fixed inset-0 bg-black backdrop-blur-sm bg-opacity-80 transition-opacity duration-300"
	/>
	<slot />
	<div class="fixed inset-0 overflow-y-auto">
		<div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
			<div
				class="relative transform overflow-hidden rounded-lg bg-white  text-left shadow-xl transition-all  sm:w-full sm:max-w-3xl"
			>
				<div class="relative">
					<img
						loading="lazy"
						class="absolute -z-10 w-2/3 h-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-50"
						src="./images/logos/logo.png"
						alt="Turnverein Nussbaumen"
					/>

					{#if imagesLength > 1}
						<div class="sm:block hidden">
							<div class="absolute top-1/2 left-0 text-2xl transform -translate-y-1/2 z-30">
								<div class="relative">
									<div class="block bg-black h-12 w-10 opacity-60 rounded-r-md" />
									<button
										class="absolute top-1/2 transform -translate-y-1/2 text-gray-200 hover:text-gray-400 left-1"
										on:click={() => {
											previousPicture();
										}}
										>&#x2329;
									</button>
								</div>
							</div>

							<div class="absolute top-1/2 right-0 text-2xl transform -translate-y-1/2 z-30">
								<div class="relative">
									<div class="block bg-black h-12 w-10 opacity-60 rounded-l-md" />
									<button
										class="absolute top-1/2 transform -translate-y-1/2 text-gray-200 hover:text-gray-400 right-1"
										on:click={() => {
											nextPicture();
										}}
										>&#x232a;
									</button>
								</div>
							</div>
						</div>

						<div class="sm:hidden flex">
							<button
								class="w-1/2 bg-none h-full absolute left-0 text-black z-10"
								on:click={() => {
									previousPicture();
								}}
							/>
							<button
								class="w-1/2 bg-none h-full absolute right-0 text-white z-10"
								on:click={() => {
									nextPicture();
								}}
							/>
						</div>
					{/if}

					<div class="relative" in:fade={{ duration: 1500 }}>
						{#each images as image, i}
							{#if image !== ''}
								<div>
									{#if i === active}
										<div class="sm:h-96 h-48 w-full relative">
											<img
												loading="lazy"
												class="absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-500 ease-in-out"
												src={image}
												alt={name}
											/>
										</div>
									{/if}
								</div>

								<div class="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex">
									{#if imagesLength > 1}
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
									{/if}
								</div>
							{/if}
						{/each}
					</div>
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

					<div class="sm:grid sm:grid-cols-3">
						{#each leiter as leit}
							<div class="mt-3">
								<a href="/kontakt" class="flex items-center sm:col-span-1">
									<div>
										<img
											loading="lazy"
											class="sm:h-12 sm:w-12 h-10 w-10 rounded-full"
											src={leit.imageUrl}
											alt={leit.name}
										/>
									</div>

									<div class="ml-3">
										<button
											on:click={() => {
												$currentPage++;
											}}
										>
											<div class="text-sm text-gray-900">
												<div>{leit.name}</div>
											</div>
										</button>
									</div>
								</a>
							</div>
						{/each}
					</div>

					<div class="absolute top-0 right-0 h-12 w-12 ">
						<div class=" bg-black h-full w-full opacity-60 rounded-bl-lg" />
						<button
							class="absolute top-3 right-4 text-gray-200 hover:text-gray-400 z-40"
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

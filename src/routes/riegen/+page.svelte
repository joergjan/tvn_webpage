<script lang="ts">
	import RiegeModal from '$lib/components/RiegeModal.svelte';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';
	import { riegen } from '$lib/scripts/stores';
	import LoadAnimation from '$lib/components/LoadAnimation.svelte';
	import Actions from './Actions.svelte';

	let showRiege = false;
	let currentRiege = 0;

	function handleClose() {
		showModal();
	}

	function showModal() {
		if (showRiege) {
			showRiege = false;
		} else {
			showRiege = true;
		}
	}

	function getHours(isoTime) {
		let date = new Date(isoTime);
		let hours = date.getUTCHours();
		return hours.toString().padStart(2, '0');
	}

	function getMinutes(isoTime) {
		let date = new Date(isoTime);
		let minutes = date.getUTCMinutes();
		return minutes.toString().padStart(2, '0');
	}
</script>

<svelte:head>
	<title>TVN | Riegen</title>
	<meta
		name="description"
		content="Im TV Nussbaumen findest du eine vielfältige Auswahl an Riegen für jeden Geschmack. Egal wie alt du bist oder welches Fitnesslevel du hast, bei uns gibt es bestimmt eine Riege, die zu dir passt! Hier findest du eine Übersicht unserer Riegen."
	/>
</svelte:head>

<Actions />

<h1 class="h1">Riegen</h1>

<div class="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative min-h-80">
	{#if $riegen.length > 0}
		{#each [...$riegen].reverse() as riege, i}
			<IntersectionObserver animation="fade-in">
				<div class="flex flex-col rounded-b-lg shadow-lg hover-scale text-center">
					<button
						on:click={() => {
							showModal();
							currentRiege = $riegen.length - 1 - i;
						}}
					>
						<img
							class="h-48 w-full rounded-t-lg object-cover"
							src={riege.image.length > 0
								? riege.image[0].url + '?auto=compress&lossless=false&q=30&fm=webp'
								: '/images/riegen/alleRiegen.jpg'}
							alt={riege.name}
						/>

						<div class="flex flex-1 flex-col pb-5 pt-3">
							<div class="flex-1">
								<div class="text-sm text-tvbluelight">
									{riege.age}
								</div>
								<div class="h4 py-1 font-semibold">
									{riege.name}
								</div>
							</div>
							<div class="pt-3 text-sm">
								{#each riege.trainingszeiten as trainingszeit}
									<div>
										{trainingszeit.weekday.name}: {getHours(trainingszeit.from)}:{getMinutes(
											trainingszeit.from
										)} - {getHours(trainingszeit.to)}:{getMinutes(trainingszeit.to)} Uhr
									</div>
								{/each}
							</div>
						</div>
					</button>
				</div>
			</IntersectionObserver>
		{/each}
	{:else}
		<div class="absolute top-1/2 transform -translate-y-1/2 right-0 left-0">
			<LoadAnimation />
		</div>
	{/if}
</div>

{#if showRiege}
	<RiegeModal
		on:click_outside={showModal}
		on:close={handleClose}
		name={$riegen[currentRiege].name}
		trainingszeiten={$riegen[currentRiege].trainingszeiten}
		age={$riegen[currentRiege].age}
		description={$riegen[currentRiege].description}
		personen={$riegen[currentRiege].person}
		images={$riegen[currentRiege].image}
	/>
{/if}

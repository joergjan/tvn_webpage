<script>
	import Trainingszeiten from '$lib/components/Trainingszeiten.svelte';
	import Quotes from '$lib/components/Quotes.svelte';
	import Aktuelles from '$lib/components/Aktuelles.svelte';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';
	import { currentPage } from '$lib/scripts/stores';
	import { onMount } from 'svelte';

	let mapbox;

	onMount(async () => {
		mapbox = (await import('$lib/components/MapBoxComponent.svelte')).default;
	});
</script>

<svelte:head>
	<title>TV Nussbaumen</title>
	<meta
		name="description"
		content="Hier findest du alle aktuellen und wichtigen Informationen über den Turnverein Nussbaumen"
	/>
</svelte:head>

<h1 class="h1 md:hidden">Unser Verein</h1>

<div class="hidden md:block">
	<div class="flex justify-center items-center">
		<img src="./images/logos/turner_webpage.png" height="500" width="1100" alt="turner" />
	</div>
</div>

<div class="md:pt-10">
	<Quotes />
</div>

<div>
	<span class="sr-only">Akutelles</span>
	<Aktuelles />
</div>

<div class="pt-10">
	<h2 class="h2">Trainingszeiten</h2>
	<div>
		<a
			href="/downloads"
			on:click={() => {
				$currentPage = 5;
			}}>Infos zu Anlässen gibts im Jahresprogramm oder direkt beim Riegenleiter</a
		>
	</div>
	<Trainingszeiten />
</div>

<IntersectionObserver animation="fade-in">
	<div class="mt-5">
		<div class="mt-10 lg:grid lg:grid-cols-5 max-h-auto">
			<div class="lg:col-span-1 lg:col-start-1">
				<div class="font-semibold">Hier trainieren wir:</div>
				<div>Turnhalle Nussbaumen</div>
				<div>Alte Dorfstrasse 11a</div>
				<div>8537 Nussbaumen</div>
			</div>

			<div class="lg:col-span-4 lg:col-start-2 h-[500px] mt-5 lg:mt-0">
				<svelte:component this={mapbox} />
			</div>
		</div>
	</div>
</IntersectionObserver>

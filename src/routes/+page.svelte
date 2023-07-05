<script>
	import Trainingszeiten from '$lib/components/Trainingszeiten.svelte';
	import Quotes from '$lib/components/Quotes.svelte';
	import Aktuelles from '$lib/components/Aktuelles.svelte';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';
	import { currentPage } from '$lib/components/stores';
	import MapBoxComponent from '$lib/components/MapBoxComponent.svelte';
</script>

<svelte:head>
	<title>TV Nussbaumen</title>
	<meta
		name="description"
		content="Hier findest du alle aktuellen und wichtigen Informationen über den Turnverein Nussbaumen"
	/>
</svelte:head>

<div class="h1 md:hidden">Unser Verein</div>

<div class="hidden md:block md:-mt-32 md:-mb-20 lg:-mt-48">
	<div class="justify-center items-center z-0">
		<img src="./images/logos/turner_webpage.png" alt="turner" />
	</div>
</div>

<IntersectionObserver once={true} let:intersecting>
	<div class="pt-20">
		<Quotes />
	</div>
</IntersectionObserver>

<IntersectionObserver once={true} let:intersecting>
	<div class="pt-20">
		<div class="h2">Aktuelles</div>
		<Aktuelles />
	</div>
</IntersectionObserver>

<IntersectionObserver once={true} let:intersecting>
	<div class="pt-12">
		<div class="h2">Trainingszeiten</div>
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
</IntersectionObserver>

<div class="mt-5">
	<div class="mt-10 lg:grid lg:grid-cols-5 max-h-auto">
		<div class="lg:col-span-1 lg:col-start-1">
			<div class="font-semibold">Hier trainieren wir:</div>
			<div>Turnhalle Nussbaumen</div>
			<div>Alte Dorfstrasse 11a</div>
			<div>8537 Nussbaumen</div>
		</div>

		<div class="lg:col-span-4 lg:col-start-2 h-[500px] mt-5 lg:mt-0">
			<MapBoxComponent />
		</div>
	</div>
</div>

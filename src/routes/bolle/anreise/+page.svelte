<script>
	import Timetable from '$lib/components/Timetable.svelte';
	import { onMount } from 'svelte';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';

	/**
	 * @type {typeof import("$lib/components/MapBoxComponent.svelte").default}
	 */
	let mapboxgl;

	onMount(async () => {
		mapboxgl = (await import('$lib/components/MapBoxComponent.svelte')).default;
	});
</script>

<svelte:head>
	<title>Bollä | Anreise</title>e>
	<meta
		name="description"
		content="Der Bollä Dunnschtig ist das Fest am Gründonnerstag. Jedes Jahr durch den Turnverein
		Nussbaumen organisiert, bietet er etwas für Gross und Klein!"
	/>
</svelte:head>

<h2 class="h2">Anreise</h2>

<h4 class="h4">Mit ÖV</h4>
<div class="pb-3">Beachte, dass nicht die ganze Nacht Busse fahren.</div>
<Timetable />

<h4 class="h4 pt-10">Mit dem Auto / Velo</h4>

<div>
	Es hat eine beschränkte Anzahl kostenlose Parkplätze verfügbar. Die Parkplätze befinden sich
	direkt beim Schulhaus. Velos können ebenfalls dort parkiert werden.
</div>

<IntersectionObserver animation="fade-in">
	<div class="w-full h-[500px] mt-3">
		<svelte:component this={mapboxgl} coordinates={[8.824630470516837, 47.62573706330724]} />
	</div>
</IntersectionObserver>

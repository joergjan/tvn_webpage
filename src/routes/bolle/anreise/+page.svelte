<script>
	import Timetable from '$lib/components/Timetable.svelte';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';
</script>

<svelte:head>
	<title>Bollä | Anreise</title>e>
	<meta
		name="description"
		content="Der Bollä Dunnschtig ist das Fest am Gründonnerstag. Jedes Jahr durch den Turnverein
		Nussbaumen organisiert, bietet er etwas für Gross und Klein!"
	/>
</svelte:head>

<h1 class="h1">Anreise</h1>

<h3 class="h3">Mit ÖV</h3>
<Timetable />

<h3 class="h3 pt-10">Mit dem Auto / Velo</h3>

<div>
	Es hat eine beschränkte Anzahl kostenlose Parkplätze verfügbar. Die Parkplätze befinden sich
	direkt beim Schulhaus. Velos können ebenfalls dort parkiert werden.
</div>

<div class="w-full h-[400px] mt-3">
	<IntersectionObserver once={true} let:intersecting>
		<iframe
			title="location"
			class="flex shadow-lg rounded-lg"
			width="100%"
			height="100%"
			loading="lazy"
			src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCqL-wkzG0GGKyEOAHyY4kky2zDbKz5u-Y&q=alte+dorfstrass+11a+nussbaumen+tg"
		/>
	</IntersectionObserver>
</div>

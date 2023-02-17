<script>
	import Trainingszeiten from '$lib/components/Trainingszeiten.svelte';
	import Quotes from '$lib/components/Quotes.svelte';
</script>

<title>TV Nussbaumen</title>

<div class="h1 md:hidden">Unser Verein</div>

<div class="hidden md:block md:-mt-32 md:-mb-20 lg:-mt-48">
	<div class="justify-center items-center">
		<img class="" src="./images/logos/turner_webpage.png" alt="turner" />
	</div>
</div>

<div class="pt-30">
	<Quotes />
</div>
<div class="pt-20">
	<Trainingszeiten />
</div>

<div class="mt-5">
	<div class="mt-10 lg:grid lg:grid-cols-5 h-108 lg:h-96">
		<div class="lg:col-span-1 lg:col-start-1">
			<div class="font-semibold">Hier trainieren wir:</div>
			<div>Turnhalle Nussbaumen</div>
			<div>Alte Dorfstrasse 11a</div>
			<div>8537 Nussbaumen</div>
		</div>

		<div class="lg:col-span-4 lg:col-start-2 h-96 mt-5 lg:mt-0 pb-0">
			<iframe
				title="location"
				class="flex shadow-xl"
				width="100%"
				height="100%"
				loading="lazy"
				src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCqL-wkzG0GGKyEOAHyY4kky2zDbKz5u-Y&q=primarschule+nussbaumen+tg"
			/>
		</div>
	</div>
</div>

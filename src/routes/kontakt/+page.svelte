<script>
	import Vorstand from './Vorstand.svelte';
	import Leiter from './Leiter.svelte';
</script>

<div class="h1">Kontakt</div>

<div>
	<div>
		<div class="h2">Unser Vorstand</div>
		<div>Der Vorstand leitet den Verein</div>
		<Vorstand />
	</div>
	<div>
		<div class="h2 pt-10">Unsere Leiter</div>
		<div>
			Die Leiter sind für den täglichen Turnbetrieb zuständig. Mit viel Herzblut organisieren sie
			Turnstunden, Ausflüge und vieles mehr.
		</div>
		<Leiter />
		<div class="mt-10 lg:grid lg:grid-cols-5 h-108 lg:h-96">
			<div class="lg:col-span-1 lg:col-start-1">
				<div class="font-semibold">Turnverein Nussbaumen</div>
				<div>c/o Christian Thurnheer</div>
				<div>Altwingerten 1</div>
				<div>8537 Nussbaumen</div>
			</div>

			<div class="lg:col-span-4 lg:col-start-2 h-96 mt-5 lg:mt-0 pb-0">
				<iframe
					title="location"
					class="flex shadow-xl"
					width="100%"
					height="100%"
					loading="lazy"
					src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCqL-wkzG0GGKyEOAHyY4kky2zDbKz5u-Y&q=altwingerten+1+Nussbaumen"
				/>
			</div>
		</div>
	</div>
</div>

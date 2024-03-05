<script>
	import { currentBollePage } from '$lib/scripts/stores';
	import MapBoxComponent from '$lib/components/MapBoxComponent.svelte';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';
</script>

<svelte:head>
	<title>TVN | Bollä Dunnschtig</title>
	<meta
		name="description"
		content="Der Bollä Dunnschtig ist das Fest am Gründonnerstag. Jedes Jahr durch den Turnverein
		Nussbaumen organisiert, bietet er etwas für Gross und Klein."
	/>
</svelte:head>

<img
	src="/images/bolle/flyer24.jpeg"
	class="-mt-3 rounded-md shadow-lg max-h-96"
	alt="Bollä Dunnschtig Flyer"
/>
<div class="mb-6"></div>

<IntersectionObserver animation="direction-right">
	<p>
		Der Bollä Dunnschtig ist das Fest am Gründonnerstag. Jedes Jahr durch den Turnverein Nussbaumen
		organisiert, bietet er etwas für Gross und Klein!
	</p>
</IntersectionObserver>

<IntersectionObserver animation="direction-left">
	<h2 class="h2 mt-7 -mb-2">Infos A-Z</h2>
</IntersectionObserver>

<div>
	<IntersectionObserver animation="direction-right">
		<div>
			<h4 class="h4 mt-3">Altersgrenze</h4>
			<p>
				Bis 20:00 Uhr sind Erwachsene und Kinder willkommen. Danach ist der Eintritt nur noch ab 16
				Jahren erlaubt.
			</p>
		</div>
	</IntersectionObserver>
	<IntersectionObserver animation="direction-left">
		<div>
			<h4 class="h4 mt-3">Alkohol</h4>
			<p>
				Kindern und Jugendlichen unter 16 Jahren ist der Konsum von Alkohol strengstens untersagt.
				Jugendlichen unter 18 Jahren ist der Konsum von Spirituosen und Getränken mit Spirituosen
				(Mischgetränken) strengstens untersagt. Wenn das Alter nicht zweifelsfrei über den
				gesetzlichen Grenzen liegt, muss ein Ausweis vorgelegt werden.
			</p>
		</div>
	</IntersectionObserver>
	<IntersectionObserver animation="direction-right">
		<div>
			<h4 class="h4 mt-3">Anreise</h4>
			<p class="md:flex">
				Du kannst mit ÖV, mit dem Auto oder Velo anreisen. Mehr Infos dazu unter
				<a
					class="flex group hover:text-gray-500 items-center underline md:ml-1"
					href="/bolle/anreise"
					on:click={() => {
						$currentBollePage = 1;
					}}
				>
					Anreise
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="group-hover:fill-gray-500 h-4"
						height="24"
						viewBox="0 -960 960 960"
						width="24"
					>
						<path d="m216-160-56-56 464-464H360v-80h400v400h-80v-264L216-160Z" />
					</svg>
				</a>
			</p>
		</div>
	</IntersectionObserver>
	<IntersectionObserver animation="direction-left">
		<div>
			<h4 class="h4 mt-3">bezahlen</h4>
			<p>Bei uns kannst du bar, mit Karte oder mit TWINT bezahlen.</p>
		</div>
	</IntersectionObserver>
	<IntersectionObserver animation="direction-right">
		<div>
			<h4 class="h4 mt-3">Depot</h4>
			<p>
				Für Flaschen und Becher wird ein Depot von CHF 2.00 erhoben. Das Depot wird bei der Rückgabe
				in bar zurückerstattet. Getränke und Becher können direkt an der Zentralen Depotstelle bei
				der Garderobe oder direkt an der Bar zurückgegeben werden.
			</p>
		</div>
	</IntersectionObserver>
	<IntersectionObserver animation="direction-left">
		<div>
			<h4 class="h4 mt-3">Eintritt</h4>
			<p>Der Eintritt kostet CHF 5.00.</p>
		</div>
	</IntersectionObserver>
	<IntersectionObserver animation="direction-right">
		<div>
			<h4 class="h4 mt-3">Essen und Getränke</h4>
			<p>
				Wir haben Pommes, Schnitzelbrote, Würste und ein Kuchenbuffet im Angebot. Das Mitbringen von
				Getränken ist nicht erlaubt.
			</p>
		</div>
	</IntersectionObserver>

	<div>
		<IntersectionObserver animation="direction-left">
			<h4 class="h4 mt-3">Standort</h4>
			<p>Du findest uns beim Schulhaus Nussbaumen.</p>
		</IntersectionObserver>
		<IntersectionObserver animation="fade-in">
			<div class="w-full h-[500px] mt-3">
				<MapBoxComponent />
			</div>
		</IntersectionObserver>
	</div>
</div>

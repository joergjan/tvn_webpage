<script>
	import { currentBollePage } from '$lib/components/stores'
	import MapBoxComponent from '$lib/components/MapBoxComponent.svelte'
</script>

<svelte:head>
	<title>TVN | Bollä Dunnschtig</title>e>
	<meta
		name="description"
		content="Der Bollä Dunnschtig ist das Fest am Gründonnerstag. Jedes Jahr durch den Turnverein
		Nussbaumen organisiert, bietet er etwas für Gross und Klein!"
	/>
</svelte:head>

<div>
	Der Bollä Dunnschtig ist das Fest am Gründonnerstag. Jedes Jahr durch den Turnverein Nussbaumen
	organisiert, bietet er etwas für Gross und Klein.
</div>

<h2 class="h2 mt-7 -mb-2">Infos A-Z</h2>

<div>
	<div>
		<div class="h4 mt-3">Altersgrenze</div>
		<div>
			Bis 20:00 Uhr sind Erwachsene und Kinder willkommen. Danach ist der Eintritt nur noch ab 16
			Jahren erlaubt.
		</div>
	</div>
	<div>
		<div class="h4 mt-3">Alkohol</div>
		<div>
			Kindern und Jugendlichen unter 16 Jahren ist der Konsum von Alkohol strengstens untersagt.
			Jugendlichen unter 18 Jahren ist der Konsum von Spirituosen und Getränken mit Spirituosen
			(Mischgetränken) strengstens untersagt. Wenn das Alter nicht zweifelsfrei über den
			gesetzlichen Grenzen liegt, muss ein Ausweis vorgelegt werden.
		</div>
	</div>
	<div>
		<div class="h4 mt-3">Anreise</div>
		<div class="flex">
			Du kannst mit ÖV, mit dem Auto oder Velo anreisen. Mehr Infos dazu unter
			<a
				class="flex hover:text-gray-500 ml-1"
				href="/bolle/anreise"
				on:click={() => {
					$currentBollePage = 1;
				}}
			>
				<div class="underline flex">Anreise</div>
				<div class="-rotate-45 font-bold flex no-underline">&rarr;</div>
			</a>
		</div>
	</div>
	<div>
		<div class="h4 mt-3">Bargeldlos bezahlen</div>
		<div>Bei uns kannst du mit der Karte Bezahlen. TWINT wird NICHT unterstützt.</div>
	</div>
	<div>
		<div class="h4 mt-3">Depot</div>
		<div>
			Für Flaschen und Becher wird ein Depot von CHF 2.00 erhoben. Das Depot wird bei der Rückgabe
			in bar zurückerstattet. Getränke und Becher können direkt an der Zentralen Depotstelle bei der
			Garderobe oder direkt an der Bar zurückgegeben werden.
		</div>
	</div>
	<div>
		<div class="h4 mt-3">Eintritt</div>
		<div>bis 20:00 Uhr ist der Eintritt kostenlos.</div>
	</div>
	<div>
		<div class="h4 mt-3">Essen und Getränke</div>
		<div>
			Wir haben Pommes, Schnitzelbrote, Würste und ein Kuchenbuffet im Angebot. Das Mitbringen von
			Getränken ist nicht erlaubt.
		</div>
	</div>
	<div>
		<div class="h4 mt-3">Standort</div>
		<div>
			Du findest uns beim Schulhaus Nussbaumen.
		</div>
		<div class="w-full h-[500px] mt-3">
			<MapBoxComponent />
		</div>
	</div>
</div>

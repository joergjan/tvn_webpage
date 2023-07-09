<script>
	import Kontakt from '$lib/components/Kontakt.svelte';
	import { personen } from '$lib/scripts/personen';
	import MapBoxComponent from '$lib/components/MapBoxComponent.svelte';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';
</script>

<title>TVN | Kontakt</title>

<svelte:head>
	<title>TVN | Kontakt</title>
	<meta
		name="description"
		content="Alle Vorstandsmitglieder und Leiter des TV Nussbaumen auf einen Blick"
	/>
</svelte:head>

<h1 class="h1">Kontakt</h1>

<div>
	<div>
		<div class="h2">Unser Vorstand</div>
		<div>Der Vorstand leitet den Verein</div>
		<ul class="sm:grid sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
			{#each personen as person}
				{#if person.vorstand}
					<li>
						<Kontakt {person} />
					</li>
				{/if}
			{/each}
		</ul>
	</div>
	<div>
		<div class="h2 pt-10">Unsere Leiter</div>
		<div>
			Die Leiter sind für den täglichen Turnbetrieb zuständig. Mit viel Herzblut organisieren sie
			Turnstunden, Ausflüge und vieles mehr.
		</div>

		<div class="h3 mt-7 -mb-5">Riegenleiter</div>
		<ul class="sm:grid sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
			{#each personen as person}
				{#if person.riegenleiter}
					<li>
						<Kontakt {person} />
					</li>
				{/if}
			{/each}
		</ul>
		<div class="h3 mt-7 -mb-5">Hilfsleiter</div>
		<ul class="sm:grid sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
			{#each personen as person}
				{#if person.leiter && !person.riegenleiter}
					<li>
						<Kontakt {person} />
					</li>
				{/if}
			{/each}
		</ul>
		<IntersectionObserver animation="fade-in">
			<div class="mt-10 lg:grid lg:grid-cols-5 max-h-auto">
				<div class="lg:col-span-1 lg:col-start-1">
					<div class="font-semibold">Turnverein Nussbaumen</div>
					<div>c/o Christian Thurnheer</div>
					<div>Altwingerten 1</div>
					<div>8537 Nussbaumen</div>
				</div>

				<div class="lg:col-span-4 lg:col-start-2 h-[500px] mt-5 lg:mt-0 pb-0">
					<MapBoxComponent coordinates={[8.825587388065486, 47.62381098583046]} />
				</div>
			</div>
		</IntersectionObserver>
	</div>
</div>

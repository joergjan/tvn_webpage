<script>
	import { currentPage } from '$lib/components/stores';
	import { titles } from './navbar';

	let bollePage = 0;

	for (let i = 0; i < titles.length; i++) {
		if (titles[i].short == 'bo') {
			bollePage = i;
		}
	}
</script>

<div class="h2">Turnerunterhaltung</div>

<div class="h2">Bollä Dunnschtig</div>
<button class="button-gray px-2 py-1" on:click={() => currentPage.update((n) => (n = bollePage))}>
	<a href="/bolle"> weitere Infos </a>
</button>

<div class="h2">Turnfester</div>

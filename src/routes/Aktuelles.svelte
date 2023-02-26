<script>
	import { currentPage } from '$lib/components/stores';
	import { titles } from './navbar';

	let bollePage = 0;

	for (let i = 0; i < titles.length; i++) {
		if (titles[i].short == 'bo') {
			bollePage = i;
		}
	}

	let unterhaltung = false;
	let bolle = false;
	let turnfest = false;
</script>

<div>
	<button
		on:click={() => {
			if (unterhaltung) {
				unterhaltung = false;
			} else {
				unterhaltung = true;
			}
		}}
	>
		<div class="h2">Turnerunterhaltung</div>
	</button>
	{#if unterhaltung}
		<div class="mb-10">
			<a href="./files/turnerunterhaltung.pdf" target="_blank" rel="noreferrer">
				<img class="h-auto rounded-lg shadow-lg" src="./files/turnerunterhaltung.pdf" alt="" />
			</a>
		</div>
	{/if}
</div>

<div>
	<button
		on:click={() => {
			if (bolle) {
				bolle = false;
			} else {
				bolle = true;
			}
		}}
	>
		<div class="h2">Bollä Dunnschtig</div>
	</button>
	{#if bolle}
		<div class="mb-10">
			<button on:click={() => currentPage.update((n) => (n = bollePage))}>
				<a href="/bolle">
					<img class="w-auto rounded-lg shadow-lg" src="./images/bolle/flyer.jpg" alt="" />
				</a>
			</button>
		</div>
	{/if}
</div>

<div>
	<button
		on:click={() => {
			if (turnfest) {
				turnfest = false;
			} else {
				turnfest = true;
			}
		}}
	>
		<div class="h2">Turnfester 2023</div>
	</button>
	{#if turnfest}
		<div class="flex">
			<div class="mr-5">
				<a href="https://wohlen2023.ch" target="_blank" rel="noreferrer">
					<img class="max-w-[400px]" src="./images/aktuelles/wohlen.png" alt="" />
				</a>
			</div>
			<a href="https://www.ktf2023.ch" target="_blank" rel="noreferrer">
				<img class="max-h-[400px]" src="./images/aktuelles/wyland.png" alt="" />
			</a>
		</div>
	{/if}
</div>

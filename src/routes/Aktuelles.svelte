<script>
	import { currentPage } from '$lib/components/stores';
	import { titles } from '../lib/components/navbar';

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
		<div class="flex items-center hover">
			<div class="h2">Unterhaltung</div>
			<svg
				class="h-10 w-10 ml-1 mb-3"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		</div>
	</button>
	{#if unterhaltung}
		<div class="mb-10">
			<a href="./files/turnerunterhaltung.pdf" target="_blank" rel="noreferrer">
				<img
					class="h-auto rounded-lg shadow-lg hover-scale"
					src="./files/turnerunterhaltung.pdf"
					alt=""
				/>
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
		<div class="flex items-center hover">
			<div class="h2">Bollä Dunnschtig</div>
			<svg
				class="h-10 w-10 ml-1 mb-3"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		</div>
	</button>
	{#if bolle}
		<div class="mb-10">
			<button on:click={() => currentPage.update((n) => (n = bollePage))}>
				<a href="/bolle">
					<img
						class="w-auto rounded-lg shadow-lg hover-scale"
						src="./images/bolle/flyer.jpg"
						alt=""
					/>
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
		<div class="flex items-center hover">
			<div class="h2">Turnfester 2023</div>
			<svg
				class="h-10 w-10 ml-1 mb-3"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
			>
				<path
					fill-rule="evenodd"
					d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
					clip-rule="evenodd"
				/>
			</svg>
		</div>
	</button>
	{#if turnfest}
		<div class="">
			<div class="mb-5">
				<a href="https://wohlen2023.ch" target="_blank" rel="noreferrer">
					<img class="max-h-32 hover-scale" src="./images/aktuelles/wohlen.png" alt="" />
				</a>
			</div>
			<a href="https://www.ktf2023.ch" target="_blank" rel="noreferrer">
				<img class="max-h-42 hover-scale" src="./images/aktuelles/wyland.png" alt="" />
			</a>
		</div>
	{/if}
</div>

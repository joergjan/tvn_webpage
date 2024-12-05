<script>
	import { currentPage } from '../scripts/stores';
	import { titles } from '../scripts/navbar';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';
	import { slide } from 'svelte/transition';

	let bollePage = 0;
	let downloadsPage = 0;

	for (let i = 0; i < titles.length; i++) {
		if (titles[i].short == 'do') {
			downloadsPage = i;
		}
	}

	for (let i = 0; i < titles.length; i++) {
		if (titles[i].short == 'bo') {
			bollePage = i;
		}
	}

	let unterhaltung = false;
	let leiter = false;
	let bolle = false;
	let turnfest = false;
</script>

<h2 class="pt-10">Aktuelles</h2>

<IntersectionObserver animation="direction-right">
	<div>
		<a href="/bolle">
			<div class="flex items-center hover">
				<h3>Bollä Dunnschtig 2025</h3>
			</div>
		</a>
		<!--
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
				<h3>Bollä Dunnschtig</h3>

				<svg
					class={bolle ? 'h-10 w-10 ml-1 rotate-180' : 'h-10 w-10 ml-1'}
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
			<div class="mb-8 mt-3">
				<div class="flex">
					<button
						on:click={() => {
							$currentPage = bollePage;
						}}
					>
						<a href="/bolle">
							<img
								loading="lazy"
								class="w-auto max-h-96 rounded-lg shadow-lg hover-scale"
								src="./images/bolle/flyer24.png"
								alt=""
							/>
						</a>
					</button>
				</div>
			</div>
		{/if}
		 -->
	</div>
</IntersectionObserver>

<IntersectionObserver animation="direction-right">
	<div>
		<button
			on:click={() => {
				if (leiter) {
					leiter = false;
				} else {
					leiter = true;
				}
			}}
		>
			<div class="flex items-center hover">
				<h3>Leiter Gesucht</h3>
				<svg
					class={leiter ? 'h-10 w-10 ml-1 rotate-180' : 'h-10 w-10 ml-1'}
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
	</div>
	{#if leiter}
		<div in:slide>
			Möchtest du unserem Leiterteam der Jugendriegen unter die Arme greifen? Wir suchen
			Unterstützung. Melde dich bei
			<a href="mailto:jugend@tvnussbaumen.ch"> jugend@tvnussbaumen.ch </a>
		</div>
	{/if}
</IntersectionObserver>

<IntersectionObserver animation="direction-left">
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
				<h3>Turnfester 2025</h3>

				<svg
					class={turnfest ? 'h-10 w-10 ml-1 rotate-180' : 'h-10 w-10 ml-1'}
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
			<div class="mb-8" in:slide>
				<div class="mb-5 mt-3">
					<div class="flex">
						<a href="https://lausanne2025.ch/de/" target="_blank" rel="noreferrer">
							<img src="./images/aktuelles/lausanne.svg" class="h-20 hover-scale" alt="" />
						</a>
					</div>
				</div>
			</div>
		{/if}
	</div>
</IntersectionObserver>

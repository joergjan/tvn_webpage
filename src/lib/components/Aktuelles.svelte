<script>
	import { currentPage } from './stores';
	import { titles } from './navbar';

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
			<div class="h3">Unterhaltung</div>
			<svg
				class={unterhaltung ? 'h-10 w-10 ml-1 rotate-180' : 'h-10 w-10 ml-1'}
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
		<div class="mb-8 mt-3">
			<div class="flex">
				<a href="./files/turnerunterhaltung.pdf" target="_blank" rel="noreferrer">
					<img
						loading="lazy"
						class="h-auto rounded-lg shadow-lg hover-scale"
						src="./images/aktuelles/turnerunterhaltung.jpg"
						alt=""
					/>
				</a>
			</div>
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
			<div class="h3">Bollä Dunnschtig</div>

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
							class="w-auto rounded-lg shadow-lg hover-scale"
							src="./images/bolle/flyer.jpg"
							alt=""
						/>
					</a>
				</button>
			</div>
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
			<div class="h3">Turnfester</div>

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
		<div class="mb-8">
			<div class="mb-5 mt-3">
				<div class="flex">
					<a href="https://wohlen2023.ch" target="_blank" rel="noreferrer">
						<img
							loading="lazy"
							class="sm:h-32 h-24 hover-scale"
							src="./images/aktuelles/wohlen.jpg"
							alt=""
						/>
					</a>
				</div>
			</div>
			<div class="flex">
				<a href="https://www.ktf2023.ch" target="_blank" rel="noreferrer">
					<img
						loading="lazy"
						class="sm:h-42 h-28 hover-scale"
						src="./images/aktuelles/wyland.png"
						alt=""
					/>
				</a>
			</div>
		</div>
	{/if}
</div>

<div>
	<button
		on:click={() => {
			$currentPage = downloadsPage;
		}}
	>
		<a href="/downloads">
			<div class="flex items-center hover">
				<div class="h3">Jahresprogramme</div>
				<div class="ml-3 -rotate-45 font-bold text-lg">&rarr;</div>
			</div>
		</a>
	</button>
</div>

<script>
	import { riegen } from '$lib/components/riegen';
	import { currentPage, selectedAgeID, selectedRiegeID } from '$lib/components/stores';

	export let person = {
		riegeId: 0,
		riege2Id: 0,
		riege3Id: 0,
		name: '',
		role: '',
		imageUrl: './images/people/avatar.jpeg',
		mail: 'mailto:info@tvnussbaumen.ch',
		vorstand: false,
		leiter: true
	};

	/**
	 * @type {any[]}
	 */
	let geleiteteRiegen = [];

	for (const riege of riegen) {
		if (riege.riegeID == person.riegeId) {
			geleiteteRiegen.push(riege.name);
		}
		if (riege.riegeID == person.riege2Id) {
			geleiteteRiegen.push(riege.name);
		}
		if (riege.riegeID == person.riege3Id) {
			geleiteteRiegen.push(riege.name);
		}
	}
</script>

<div class="pt-10">
	<div class="flex justify-center">
		<img class="rounded-full" src={person.imageUrl} alt={person.name} />
	</div>
	<div class="pt-3 flex justify-center">{person.name}</div>

	{#if person.vorstand}
		<div class="text-sm text-gray-600 font-medium flex justify-center pt-1 pb-1">{person.role}</div>
	{/if}

	{#if person.leiter}
		{#each geleiteteRiegen as geleiteteRiege}
			<div class="flex justify-center">
				<button
					on:click={() => {
						$currentPage = 1;
					}}
				>
					<a href="/riegen" class="text-sm px-3 py-1 badge-blue flex mb-1">
						{geleiteteRiege}
					</a>
				</button>
			</div>
		{/each}
	{/if}

	<div class="flex justify-center">
		<a href={person.mail}>
			<button class="px-2 py-1 text-sm button-gray">
				Mail
				<svg
					class="h-4 pl-2"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
					aria-hidden="true"
				>
					<path
						d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"
					/>
					<path
						d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"
					/>
				</svg>
			</button>
		</a>
	</div>
</div>

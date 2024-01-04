<script>
	import RiegeModal from '$lib/components/RiegeModal.svelte';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';
	import { onMount } from 'svelte';

	let currentRiege = 0;
	let showRiege = false;
	export let person = {};
	let role;

	onMount(async () => {
		try {
			const response = await fetch('/api/v1/main/getRoles/' + person.roleId);
			const data = await response.json();

			role = data.role;
		} catch (error) {
			console.error('Error:', error);
		}
	});

	/**
	 * @type {any[]}
	 */
	let geleiteteRiegen = [];

	async function showModal() {
		if (showRiege) {
			showRiege = false;
		} else {
			showRiege = true;
		}
	}

	async function handleClose() {
		showModal();
	}
</script>

<div class="h-auto">
	<IntersectionObserver animation="fade-in">
		<div class="pt-10">
			<div class="flex justify-center">
				<img
					class="rounded-full"
					width="450"
					height="450"
					src={person.avatar.url +
						'?h=450&w=450&&crop=faces&lossless=false&auto=compress&fit=crop&fm=webp&q=30'}
					alt={person.name}
				/>
			</div>
			<div class="pt-3 flex justify-center font-medium">
				{person.firstName}
				{person.name}
			</div>

			{#if role}
				<div class="text-sm text-gray-600 font-medium flex justify-center pt-1 pb-1">
					{role.name}
				</div>
			{/if}

			{#each person.riegen as riege, i}
				<div class="flex justify-center">
					<button
						on:click={() => {
							currentRiege = i;
							showModal();
						}}
						class="text-sm px-3 py-1 badge-blue flex mb-1"
					>
						{riege.riege.name}
					</button>
				</div>
			{/each}

			<div class="flex justify-center">
				<a href={'mailto:' + person.email}>
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
	</IntersectionObserver>
</div>

{#if showRiege}
	<RiegeModal
		on:click_outside={showModal}
		on:close={handleClose}
		name={person.riegen[currentRiege].riege.name}
		trainingszeiten={person.riegen[currentRiege].riege.trainingszeiten}
		age={person.riegen[currentRiege].riege.age}
		description={person.riegen[currentRiege].riege.description}
		riegeId={person.riegen[currentRiege].riege.id}
		personen={person.riegen[currentRiege].riege.person}
		images={person.riegen[currentRiege].riege.image}
	/>
{/if}

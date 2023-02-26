<script>
	import { currentPage, selectedRiegeID, selectedAgeID } from '$lib/components/stores';
	import { Riegen } from '../lib/components/riegen';

	import { titles } from '$lib/components/navbar';

	let riegenPage = 0;

	for (let i = 0; i < titles.length; i++) {
		if (titles[i].short == 'ri') {
			riegenPage = i;
		}
	}
</script>

<div class="grid lg:grid-cols-3 md:grid-cols-2 gap-x-2 gap-y-2">
	{#each Riegen.reverse() as riege}
		<button
			class="col-box-1 rounded-lg shadow-lg hover-scale"
			on:click={() => {
				selectedAgeID.update((n) => (n = riege.ageID));
			}}
			on:click={() => {
				currentPage.update((n) => (n = riegenPage));
			}}
			on:click={() => {
				selectedRiegeID.update((n) => (n = riege.riegeID));
			}}
		>
			<a href="/riegen">
				<div class="m-5 relative">
					<h4 class="h4">{riege.name}</h4>
					<div>{riege.day1}</div>
					<div>{riege.time1}</div>
					{#if riege.twodays}
						<div>{riege.day2}</div>
						<div>{riege.time2}</div>
					{/if}
					<div class="absolute bottom-1/2 right-5">
						<svg
							class="lg:h-5 h-4"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
							/>
						</svg>
					</div>
				</div>
			</a></button
		>
	{/each}
</div>

<script>
	import { Riegen } from '$lib/components/riegen';

	let aktive = true;
	let jugi = true;
	let ageSelector = 2;

	function checkAktive() {
		if (aktive) {
			aktive = false;
		} else {
			aktive = true;
		}
		adjustAgeID();
	}

	function checkJugi() {
		if (jugi) {
			jugi = false;
		} else {
			jugi = true;
		}
		adjustAgeID();
	}

	function adjustAgeID() {
		if ((jugi && aktive) || (!jugi && !aktive)) {
			ageSelector = 2;
		} else if (jugi) {
			ageSelector = 0;
		} else {
			ageSelector = 1;
		}
	}
</script>

<title>TVN | Riegen</title>

<div class="h1">Riegen</div>

<fieldset class="pb-5">
	<div class="relative flex items-start pb-2">
		<div class="flex h-5 items-center">
			<input
				on:click={checkJugi}
				id="comments"
				type="checkbox"
				class="h-4 w-4 rounded-sm border-gray-400 text-tvbluelight"
				checked
			/>
		</div>
		<div class="ml-3">
			<label for="comments" class="font-medium text-gray-700">Jugendriegen anzeigen</label>
		</div>
	</div>
	<div class="relative flex items-start">
		<div class="flex h-5 items-center">
			<input
				on:click={checkAktive}
				id="comments2"
				type="checkbox"
				class="h-4 w-4 rounded-sm border-gray-400 text-tvbluelight"
				checked
			/>
		</div>
		<div class="ml-3">
			<label for="comments2" class="font-medium text-gray-700">Erwachsenenriegen anzeigen</label>
		</div>
	</div>
</fieldset>

<div class="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
	{#key ageSelector}
		{#each Riegen as riege}
			{#if riege.ageID === ageSelector || ageSelector === 2}
				<div class="flex flex-col rounded-b-lg shadow-lg">
					<img
						class="h-48 w-full rounded-t-lg object-cover"
						src={riege.imageUrl}
						alt={riege.name}
					/>
					<div class="flex flex-1 flex-col p-6">
						<div class="flex-1">
							<div class="text-sm text-tvbluelight">
								{riege.age}
							</div>
							<div class="h4 py-1">
								{riege.name}
							</div>
							<div class="mt-1 text-gray-500">
								{riege.description}
							</div>
						</div>
						<div class="pt-3 text-sm">
							<div>{riege.day1}: {riege.time1}</div>
							{#if riege.twodays}
								<div>{riege.day2}: {riege.time2}</div>
							{/if}
						</div>
						<div class="mt-3 flex items-center">
							<div>
								<div class="sr-only">{riege.leiter.name}</div>
								<img
									class="h-10 w-10 rounded-full"
									src={riege.leiter.imageUrl}
									alt={riege.leiter.name}
								/>
							</div>

							<div class="ml-3">
								<div class="text-sm text-gray-900">
									<div>{riege.leiter.name}</div>
								</div>
								<div class="flex space-x-1 text-sm text-gray-500" />
							</div>
						</div>
					</div>
				</div>
			{/if}
		{/each}
	{/key}
</div>

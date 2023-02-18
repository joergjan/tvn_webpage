<script>
	import { Riegen } from '$lib/components/riegen';

	let ageSelector = 2;
	let active = false;

	let listItems = [
		{
			name: 'Jugendriegen',
			description: 'Riegen für alle unter 16 Jahren',
			selector: 0
		},
		{
			name: 'Erwachsene',
			description: 'Riegen für alle über 16 Jahren',
			selector: 1
		},
		{
			name: 'Alle Riegen',
			description: 'Der gesamte Turnverein',
			selector: 2
		}
	];

	function setActive() {
		if (active) {
			active = false;
		} else {
			active = true;
		}
	}
</script>

<div class="h1">Riegen</div>

<div
	on:mouseleave={() => {
		active = false;
	}}
>
	<div class="relative">
		<div class="pb-3 flex items-end">
			<div class="inline-flex rounded-md shadow-sm">
				<div
					class="inline-flex items-center rounded-l-md bg-tvbluelight py-2 pl-3 pr-4 text-white shadow-sm border-r-[1px] border-white"
				>
					<svg
						class="h-5 w-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
					>
						<path
							fill-rule="evenodd"
							d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
							clip-rule="evenodd"
						/>
					</svg>
					{#each listItems as item}
						{#if item.selector === ageSelector}
							<p class="ml-2.5 text-sm font-medium">
								{item.name}
							</p>
						{/if}
					{/each}
				</div>
				<button
					type="button"
					class="inline-flex items-center rounded-l-none rounded-r-md bg-tvbluelight p-2 text-sm font-medium text-white hover:opacity-90"
					aria-haspopup="listbox"
					aria-expanded="true"
					aria-labelledby="listbox-label"
					on:click={() => setActive()}
				>
					<svg
						class="h-5 w-5 text-white"
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
				</button>
			</div>
		</div>
		{#if active}
			<ul
				class="absolute left-0 z-10 w-72 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
			>
				{#each listItems as item}
					{#if ageSelector === item.selector}
						<li
							class="cursor-default select-none p-4 text-sm hover:bg-tvbluelight hover:text-white"
						>
							<div class="relative">
								<button
									class="flex flex-col"
									on:click={() => {
										ageSelector = item.selector;
										setActive();
									}}
								>
									<div class="flex justify-between">
										<p class="font-medium ml-12">{item.name}</p>
									</div>
									<p class="mt-2 ml-12">{item.description}</p>

									<span class="hover:text-white">
										<svg
											class="h-5 w-5 absolute top-3 left-2"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="currentColor"
											aria-hidden="true"
										>
											<path
												fill-rule="evenodd"
												d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
												clip-rule="evenodd"
											/>
										</svg>
									</span>
								</button>
							</div>
						</li>
					{:else}
						<li
							class="cursor-default select-none p-4 text-sm hover:bg-tvbluelight hover:text-white"
						>
							<button
								class="flex flex-col"
								on:click={() => {
									ageSelector = item.selector;
									setActive();
								}}
							>
								<div class="flex justify-between">
									<p class="font-medium ml-12">{item.name}</p>
								</div>
								<p class="mt-2 ml-12">{item.description}</p>
							</button>
						</li>
					{/if}
				{/each}
			</ul>
		{/if}
	</div>
</div>

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

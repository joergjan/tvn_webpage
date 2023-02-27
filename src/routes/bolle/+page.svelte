<script>
	const pages = [
		{
			name: 'Event',
			selector: 0,
			parts: [
				{
					name: 'Event',
					hrefImg: './images/bolle/bolle_voll.PNG',
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					moreInfo: 0
				},
				{
					name: 'another part',
					hrefImg: './images/bolle/bolle_voll.PNG',
					text: 'some other text',
					moreInfo: 0
				}
			]
		},
		{
			name: 'Aufbau',
			selector: 1,
			parts: [
				{
					name: 'Aufbau',
					hrefImg: './images/bolle/bolle_planung.jpg',
					text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
					moreInfo: 0
				}
			]
		},
		{
			name: 'Diverses',
			selector: 2,
			parts: [
				{
					name: 'Diverses',
					hrefImg: './images/gif/runnerColor.gif',
					text: 'blablabla',
					moreInfo: 0
				}
			]
		},
		{
			name: 'Sicherheit',
			selector: 3,
			parts: [
				{
					name: 'Sicherheit',
					hrefImg: './images/gif/runnerColor.gif',
					text: 'Um die Sicherheit gewährleisten zu können folgt der Turnverein',
					moreInfo: 0
				},
				{
					name: 'teil zwei der Sicherheit',
					hrefImg: './images/gif/runnerColor.gif',
					text: 'orboiqbb',
					moreInfo: 0
				}
			]
		},
		{
			name: 'Anreise',
			selector: 4,
			parts: [
				{
					name: 'Anreise',
					hrefImg: './images/gif/runnerColor.gif',
					text: 'Die Anreise kann via ÖV oder per Auto erfolgen. Wir kennzeichnen Parkplätze in der Nähe des Events. Die Nächste Bushaltestelle ist "Schulhaus Nussbaumen". Büsse verkehren ab Frauenfeld auf Nussbaumen bis 12:00 Uhr',
					moreInfo: 0
				}
			]
		}
	];

	function setActive() {
		if (active) {
			active = false;
		} else {
			active = true;
		}
	}

	let selected = 0;
	let active = false;
</script>

<svelte:head>
	<title>TVN | Bollä Dunnschtig</title>e>
	<meta
		name="description"
		content="Der Bollä Dunnschtig ist das Fest am Gründonnerstag. Jedes Jahr durch den Turnverein
		Nussbaumen organisiert, bietet er etwas für Gross und Klein!"
	/>
</svelte:head>

<h1 class="h1">Bollä Dunnschtig</h1>

<div class="bg-white">
	<div class="max-w-3xl">
		<p class="mt-4 text-gray-500">
			Der Bollä Dunnschtig ist das Fest am Gründonnerstag. Jedes Jahr durch den Turnverein
			Nussbaumen organisiert, bietet er etwas für Gross und Klein!
		</p>
	</div>
	<div class="mt-4">
		<div class="hidden lg:flex -mx-4 overflow-x-auto sm:mx-0">
			<div class="flex-auto border-b border-gray-200 px-4 sm:px-0">
				<div class="-mb-px flex space-x-10" aria-orientation="horizontal">
					{#each pages as page, i}
						<button
							class={selected != i
								? 'hover:text-gray-400 border-tvbluelight hover:border-gray-400 hover whitespace-nowrap border-b-2 py-6 text-sm font-medium'
								: 'border-gray-400 text-gray-400 whitespace-nowrap border-b-2 py-6 text-sm font-medium'}
							on:click={() => (selected = i)}
							class:selected={selected === i}
						>
							{page.name}
						</button>
					{/each}
				</div>
			</div>
		</div>
		<div
			on:mouseleave={() => {
				active = false;
			}}
			class="lg:hidden"
		>
			<div class="relative">
				<div class="pb-3 flex items-end">
					<div class="inline-flex rounded-md shadow-sm">
						<div
							class="inline-flex items-center rounded-l-md bg-tvbluelight py-2 pl-3 pr-4 text-white shadow-sm border-r-[1px] border-white"
						>
							{#each pages as page}
								{#if page.selector === selected}
									<p class="mx-2 text-sm font-medium">
										{page.name}
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
						class="absolute left-0 z-10 w-50 origin-top-right divide-y divide-gray-200 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
					>
						{#each pages as page}
							{#if selected != page.selector}
								<li class="select-none p-4 text-sm hover:bg-tvbluelight hover:text-white">
									<button
										on:click={() => {
											selected = page.selector;
											setActive();
										}}
									>
										<p class="font-medium text-sm mx-4">{page.name}</p>
									</button>
								</li>
							{/if}
						{/each}
					</ul>
				{/if}
			</div>
		</div>
		{#each pages as page, i}
			{#each page.parts as part}
				{#if selected == i}
					<div
						id="features-panel-1"
						class="space-y-16 lg:pt-16"
						aria-labelledby="features-tab-1"
						role="tabpanel"
						tabindex="0"
					>
						<div class="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:gap-x-8">
							<div class="mt-6 lg:col-span-5 lg:mt-0">
								<h3 class="text-lg font-medium text-gray-900">{part.name}</h3>
								<p class="mt-2 text-sm text-gray-500">
									{part.text}
								</p>
							</div>
							<div class="lg:col-span-7">
								<div
									class="aspect-w-2 aspect-h-1 overflow-hidden rounded-lg sm:aspect-w-5 sm:aspect-h-2 shadow-lg"
								>
									<img src={part.hrefImg} alt={part.name} class="object-cover object-center" />
								</div>
							</div>
						</div>
					</div>
				{/if}
			{/each}
		{/each}
		<div class="mt-12">
			<a href="./images/bolle/flyer.jpg" target="_blank">
				<img class="rounded-lg shadow-lg hover-scale" src="./images/bolle/flyer.jpg" alt="" />
			</a>
		</div>
	</div>
</div>

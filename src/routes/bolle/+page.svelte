<script>
	const pages = [
		{
			name: 'Event',
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

	let selected = 0;
</script>

<title>TVN | Bollä Dunnschtig</title>

<div class="h1">Bollä Dunnschtig</div>

<div class="bg-white">
	<div class="max-w-3xl">
		<p class="mt-4 text-gray-500">
			Der Bollä Dunnschtig wird jedes Jahr vom TV Nussbaumen organisiert
		</p>
	</div>
	<div class="mt-4">
		<div class="-mx-4 flex overflow-x-auto sm:mx-0">
			<div class="flex-auto border-b border-gray-200 px-4 sm:px-0">
				<div class="-mb-px flex space-x-10" aria-orientation="horizontal">
					{#each pages as page, i}
						{#if selected != i}
							<button
								id="features-tab-1"
								class="hover:text-gray-400 border-tvbluelight hover:border-gray-400 hover whitespace-nowrap border-b-2 py-6 text-sm font-medium"
								aria-controls="features-panel-1"
								role="tab"
								type="button"
								on:click={() => (selected = i)}
								class:selected={selected === i}
							>
								{page.name}
							</button>
						{:else}<button
								id="features-tab-1"
								class="border-gray-400 text-gray-400 whitespace-nowrap border-b-2 py-6 text-sm font-medium"
								aria-controls="features-panel-1"
								role="tab"
								type="button"
								on:click={() => (selected = i)}
								class:selected={selected === i}
							>
								{page.name}
							</button>{/if}
					{/each}
				</div>
			</div>
		</div>
		{#each pages as page, i}
			{#each page.parts as part}
				{#if selected == i}
					<div
						id="features-panel-1"
						class="space-y-16 pt-10 lg:pt-16"
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
									class="aspect-w-2 aspect-h-1 overflow-hidden rounded-lg bg-gray-100 sm:aspect-w-5 sm:aspect-h-2"
								>
									<img
										src={part.hrefImg}
										alt="Maple organizer base with slots, supporting white polycarbonate trays of various sizes."
										class="object-cover object-center"
									/>
								</div>
							</div>
						</div>
					</div>
				{/if}
			{/each}
		{/each}
	</div>
</div>

<script>
	import { currentBollePage } from '$lib/scripts/stores';
	import { onMount } from 'svelte';

	let pageHref;

	onMount(() => {
		pageHref = window.location.href;

		for (let i = 0; i < titles.length; i++) {
			if (pageHref.toString().includes(titles[i].href)) {
				$currentBollePage = i;
				pageHref = pageHref;
			}
		}
	});

	let active = false;

	let titles = [
		{ name: 'Infos A-Z', href: '/', selector: 0 },
		{ name: 'Anreise', href: '/anreise', selector: 1 },
		{ name: 'Galerie', href: '/galerie', selector: 2 }
	];

	function setActive() {
		if (active) {
			active = false;
		} else {
			active = true;
		}
	}
</script>

<div class="md:grid grid-cols-12">
	<ul class="hidden md:block pt-7 md:col-span-2 lg:mr-20 mr-10 space-y-10">
		{#each titles as title, i}
			<li class="">
				<a href={'/bolle' + title.href} on:click={() => ($currentBollePage = i)}>
					<div class="relative text-gray-500 hover:transition-all hover:text-gray-700">
						<div
							class={'absolute left-0 top-1/2 transform -translate-y-1/2 bold text-tvblue text-xl ' +
								($currentBollePage === i ? 'block' : 'hidden hover:block hover:transition-all')}
						>
							&#x232a;
						</div>

						<div
							class={'ml-8 text-md font-medium whitespace-nowrap ' +
								($currentBollePage === i ? 'text-gray-700' : '')}
						>
							{title.name}
						</div>
					</div>
				</a>
			</li>
		{/each}
	</ul>

	<button
		on:mouseleave={() => {
			active = false;
		}}
		class="md:hidden"
	>
		<div class="relative">
			<div class="pb-3 flex items-end">
				<div class="inline-flex rounded-md shadow-sm">
					<div
						class="inline-flex items-center rounded-l-md bg-tvbluelight py-2 pl-3 pr-4 text-white shadow-sm border-r-[1px] border-white"
					>
						{#each titles as title}
							{#if title.selector === $currentBollePage}
								<p class="mx-2 text-sm font-medium">
									{title.name}
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
					{#each titles as title}
						{#if $currentBollePage != title.selector}
							<li class="select-none p-4 text-sm hover:bg-tvbluelight hover:text-white">
								<a
									href={'/bolle' + title.href}
									on:click={() => {
										$currentBollePage = title.selector;
										setActive();
									}}
								>
									<p class="font-medium text-sm mx-4">{title.name}</p>
								</a>
							</li>
						{/if}
					{/each}
				</ul>
			{/if}
		</div>
	</button>
	<div class="md:col-span-10 md:col-start-3">
		<h1 class="h1">Bollä Dunnschtig</h1>
		<slot />
	</div>
</div>

<script>
	import '../app.css';
	import Icon from '@iconify/svelte';

	const titles = [
		{ name: 'Unser Verein', href: '/' },
		{ name: 'Riegen', href: '/riegen' },
		{ name: 'Kontakt', href: '/kontakt' },
		{ name: 'Fotogalerie', href: '/fotogalerie' },
		{ name: 'Downloads', href: '/downloads' },
		{ name: '404 Test', href: '/error' }
	];

	let open = false;

	function menuToggle() {
		if (open) {
			open = false;
		} else {
			open = true;
		}
	}
</script>

<nav class="bg-white shadow">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 justify-between">
			<div class="flex">
				<div class="flex flex-shrink-0 items-center">
					<img
						class="block h-8 w-auto lg:hidden"
						src="./images/logos/turner.png"
						alt="Turnverein Nussbaumen"
					/>
					<img
						class="hidden h-8 w-auto lg:block"
						src="./images/logos/turner.png"
						alt="Turnverein Nussbaumen"
					/>
				</div>
				<div class="hidden md:ml-6 md:flex md:space-x-8">
					<!-- Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" -->
					{#each titles as title}
						<a
							href={title.href}
							class="inline-flex items-center border-b-2 hover:border-tvbluelight px-1 pt-1 text-sm font-medium"
							tabindex="-1"
							role="menuitem">{title.name}</a
						>
					{/each}
				</div>
			</div>

			<div class="-mr-2 flex items-center md:hidden">
				<!-- Mobile menu button -->
				<button
					type="button"
					class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
					aria-controls="mobile-menu"
					aria-expanded="false"
					on:click={menuToggle}
				>
					<span class="sr-only">Open main menu</span>
					<!--
			  Icon when menu is closed.
  
			  Heroicon name: outline/bars-3
  
			  Menu open: "hidden", Menu closed: "block"
			-->
					<svg
						class="block h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
						/>
					</svg>
					<!--
			  Icon when menu is open.
  
			  Heroicon name: outline/x-mark
  
			  Menu open: "block", Menu closed: "hidden"
			-->
					<svg
						class="hidden h-6 w-6"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						aria-hidden="true"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
					</svg>
				</button>
			</div>
		</div>
	</div>

	<!-- Mobile menu, show/hide based on menu state. -->
	{#if open}
		<div class="md:hidden" id="mobile-menu">
			<div class="border-t border-gray-200 pt-4 pb-3">
				<div class="mt-3 space-y-1">
					{#each titles as title}
						<a
							href={title.href}
							class="block px-4 py-2 text-base font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-800"
							on:click={menuToggle}>{title.name}</a
						>
					{/each}
				</div>
			</div>
		</div>
	{/if}
</nav>

<div class="overflow-scroll h-screen">
	<div class="bg-white">
		<div class="py-5 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-0">
			<slot />
		</div>
	</div>
	<div>
		<div class="bg-tvbluelight text-white">
			<nav class="md:flex md:flex-wrap justify-center hidden mt-5">
				{#each titles as title}
					<a class="hover:text-gray-400 px-5" href={title.href}>{title.name}</a>
				{/each}
			</nav>
			<div class="flex justify-center space-x-6 mt-5 items-center">
				<a
					href="https://www.facebook.com/people/TV-Nussbaumen/100064088556190/"
					target="_blank"
					rel="noreferrer"
					class="text-white"
				>
					<Icon
						icon="ant-design:facebook-filled"
						class="text-white hover:text-gray-400 md:hidden flex"
						width="20"
						height="20"
					/>
					<Icon
						icon="ant-design:facebook-filled"
						class="text-white hover:text-gray-400 hidden md:flex"
						width="25"
						height="25"
					/>
				</a>
				<a
					href="https://www.instagram.com/tvnussbaumen/"
					target="_blank"
					rel="noreferrer"
					class="text-white"
				>
					<Icon
						icon="gg:instagram"
						class="text-white hover:text-gray-400 md:hidden flex"
						width="18"
						height="18"
					/>
					<Icon
						icon="gg:instagram"
						class="text-white hover:text-gray-400 hidden md:flex"
						width="23"
						height="23"
					/>
				</a>
				<a
					href="https://www.flickr.com/groups/14819815@N20/"
					target="_blank"
					rel="noreferrer"
					class="text-white"
				>
					<Icon
						icon="raphael:flickr"
						class="text-white hover:text-gray-400 sm:hidden flex"
						width="20"
						height="20"
					/>
					<Icon
						icon="raphael:flickr"
						class="text-white hover:text-gray-400 hidden sm:flex"
						width="25"
						height="25"
					/>
				</a>
			</div>
			<div class="my-5 text-center">&copy; 2023 Turnverein Nussbaumen.</div>
		</div>
	</div>
</div>

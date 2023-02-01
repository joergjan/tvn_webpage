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

	function openMenu() {
		if (open) {
			open = false;
		} else {
			open = true;
		}
	}

	function closeMenu() {
		open = false;
	}
</script>

<div id="img-container" class="absolute left-2 top-2">
	<img src="./images/logos/turner.png" alt="avatar" class="h-12" />
</div>

<div id="nav-container" class="bg-tvbluelight p-2 flex flex-col items-end">
	<button class="h-12 w-12 p-2 group" on:click={openMenu}>
		<svg
			xmlns="<http://www.w3.org/2000/svg>"
			viewBox="0 0 20 20"
			fill="rgb(255, 255, 255)"
			class="h-full w-full"
		>
			<path
				fill-rule="evenodd"
				d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
				clip-rule="evenodd"
			/>
		</svg>
	</button>

	{#if open}
		<ul id="nav-menu" class="w-full space-y-2 pr-3 font-semibold text-xl text-right">
			{#each titles as title}
				<li>
					<a href={title.href} class="text-white hover:text-gray-400" on:click={closeMenu}
						>{title.name}</a
					>
				</li>
			{/each}
		</ul>
	{/if}
</div>

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

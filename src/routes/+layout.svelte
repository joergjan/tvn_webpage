<script>
	// @ts-nocheck

	import '../app.css';
	import Icon from '@iconify/svelte';
	import { Dropdown } from 'carbon-components-svelte';
	import { Hamburger } from 'svelte-hamburgers';

	let open;

	const titles = [
		{ name: 'Unser Verein', href: '/home' },
		{ name: 'Riegen', href: '/riegen' },
		{ name: 'Kontakt', href: '/kontakt' },
		{ name: 'Fotogalerie', href: '/fotogalerie' },
		{ name: 'Downloads', href: '/downloads' }
	];
</script>

<div class="py-5 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 font-bold">
	<div class="text-white bg-tvbluelight">
		<div class="flex place-content-end">
			<a href="/home">
				<div class="flex items-center hover:text-gray-400">
					<div class="h5 pr-5">Turnverein Nussbaumen</div>
					<div class="">
						<img class="h-10" src="./images/logos/turner.png" alt="TVN" />
					</div>
				</div>
			</a>
		</div>
		<div class="text-white">
			<div class="absolute top-3">
				<Hamburger bind:open --color="white" --layer-height="2px" --layer-width="25px" />
			</div>
			{#if open}
				<div class="bg-tvbluelight w-screen pt-2">
					{#each titles as title}
						<div class="py-3">
							<a class="hover:text-gray-400" href={title.href}>{title.name}</a>
						</div>
					{/each}
				</div>
			{/if}
		</div>
	</div>
</div>

<div class="bg-white">
	<div class="py-5 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

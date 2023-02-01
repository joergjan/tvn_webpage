<script>
	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

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
</script>

<div class="relative">
	<Navbar
		navClass="px-2 sm:px-4 py-2.5 absolute w-full z-20 top-0 left-0 border-b"
		let:hidden
		let:toggle
	>
		<NavBrand href="/">
			<img src="./images/logos/turner.png" class="mr-3 h-6 sm:h-9" alt="TVN" />
			<span class="self-center whitespace-nowrap text-xl font-semibold uppercase"
				>Turnverein Nussbaumen</span
			>
		</NavBrand>
		<NavHamburger on:click={toggle} />
		<NavUl {hidden}>
			{#each titles as title}
				<NavLi href={title.href} class="text-white">{title.name}</NavLi>
			{/each}
		</NavUl>
	</Navbar>
	<div class="overflow-scroll h-screen sm:pt-12 pt-8">
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
</div>

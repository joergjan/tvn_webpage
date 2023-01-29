<script>
	import '../app.css';

	import { Navbar, NavBrand, NavLi, NavUl, NavHamburger } from 'flowbite-svelte';

	const titles = [
		{ name: 'Unser Verein', href: '/home' },
		{ name: 'Riegen', href: '/riegen' },
		{ name: 'Kontakt', href: '/kontakt' },
		{ name: 'Fotogalerie', href: '/fotogalerie' },
		{ name: 'Downloads', href: '/downloads' }
	];
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/home">
		<img src="./images/logos/turner.png" class="mr-3 h-6 sm:h-9" alt="TVN" />
		<span class="self-center whitespace-nowrap text-xl font-semiboldtext-white">
			Turnverein Nussbaumen
		</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		{#each titles as title}
			<NavLi href={title.href} active={true}>
				{title.name}
			</NavLi>
		{/each}
	</NavUl>
</Navbar>

<div class="bg-white">
	<div class="py-5 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<slot />
	</div>
</div>

<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 hidden sm:block">
	<nav class="py-3 text-white flex justify-around">
		{#each titles as title}
			<a class="hover:text-gray-400" href={title.href}>{title.name}</a>
		{/each}
	</nav>
</div>

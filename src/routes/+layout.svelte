<script>
	import '../app.css';

	const titles = [
		{ name: 'Unser Verein', href: '/home' },
		{ name: 'Riegen', href: '/riegen' },
		{ name: 'Kontakt', href: '/kontakt' },
		{ name: 'Fotogalerie', href: '/fotogalerie' },
		{ name: 'Downloads', href: '/downloads' }
	];
</script>

<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
	<nav class="py-3 text-white text-xl flex justify-between">
		{#each titles as title}
			<a class="hover:text-gray-400" href={title.href}>{title.name}</a>
		{/each}
	</nav>
</div>

<div class="bg-white">
	<div class="py-5 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<slot />
	</div>
</div>

<div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
	<nav class="py-3 text-white flex justify-around">
		{#each titles as title}
			<a class="hover:text-gray-400" href={title.href}>{title.name}</a>
		{/each}
	</nav>
</div>

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

<div class="py-5 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
	<div class="text-white bg-tvbluelight">
		<div class="place-content-start">
			<a href="/home">
				<div class="flex items-center">
					<div class="">
						<img class="h-10" src="./images/logos/turner.png" alt="TVN" />
					</div>
					<div class="pl-5">Turnverein Nussbaumen</div>
				</div>
			</a>
		</div>
		<div class="place-content-end -mr-10">
			{#each titles as title}
				<a class="px-10" href={title.href}>{title.name}</a>
			{/each}
		</div>
	</div>
</div>

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

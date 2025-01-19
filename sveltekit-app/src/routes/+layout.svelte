<script lang="ts">
	import '../app.css';
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { navItems } from '$lib/navbar';

	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';

	injectAnalytics({ mode: dev ? 'development' : 'production' });

	let menu: boolean = false;
	let isMobile: boolean = false;

	function toggleMenu() {
		menu = !menu;
	}

	onMount(() => {
		isMobile = window.innerWidth <= 768;
	});
</script>

<svelte:head>
	<title>TV Nussbaumen</title>
</svelte:head>

<nav>
	<div class="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="">
				<a href="/">
					<img class="h-24" src="tvn_logo.png" alt="" />
				</a>
			</div>
			<div class="ml-auto hidden justify-items-end md:flex">
				<ul class="flex space-x-10">
					{#each navItems as { name, href }, i}
						<li
							class="${page.url.pathname === href
								? ' text-red-500 '
								: ' hover:text-red-500 hover:transition-all hover:duration-[400ms]'} inline-flex items-center px-1 pt-1"
						>
							<button class="group relative">
								<a {href} class="rounded-md px-3 py-2 text-sm font-medium">
									{name}
								</a>
							</button>
						</li>
					{/each}
				</ul>
			</div>

			<div class="block md:ml-6 md:hidden">
				<div class="flex items-center">
					<div class="-mr-2 flex md:hidden">
						<!-- Mobile menu button -->
						<button
							type="button"
							class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition-all duration-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded="false"
							on:click={toggleMenu}
						>
							<span class="absolute -inset-0.5"></span>
							<span class="sr-only">Open main menu</span>

							<svg
								class=" size-6 fill-white transition-all duration-300 ${menu ? 'rotate-45 ' : ''}"
								viewBox="0 0 24 24"
								stroke-width="1.5"
								stroke="currentColor"
								aria-hidden="true"
								data-slot="icon"
							>
								{#if menu}
									<path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
								{:else}
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
									/>
								{/if}
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
		{#if menu}
			<div class="md:hidden" id="mobile-menu">
				<div class="space-y-1 px-2 pb-3 pt-2">
					<a
						href="/"
						class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
						on:click={toggleMenu}
					>
						Home
					</a>
					{#each navItems as { name, href }}
						<a
							{href}
							class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
							on:click={toggleMenu}
						>
							{name}
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</nav>

<main class="mx-auto mt-10 max-w-7xl overflow-hidden px-6 lg:mt-14 lg:px-8">
	<slot />
</main>

<footer>
	<div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 md:py-24 lg:px-8">
		<nav class="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6" aria-label="Footer">
			<a href="/" class="text-gray-400 hover:text-white">Home</a>
			{#each navItems as { name, href }}
				<a {href} class="text-gray-400 hover:text-white">{name}</a>
			{/each}
		</nav>

		<p class="mt-10 text-center text-sm/6 text-gray-400">
			&copy; {new Date().getFullYear()} TV Nussbaumen
		</p>

		<p class="mt-10 text-center text-sm/6 text-gray-400 hover:text-gray-300">
			<a href="https://studio.tvnussbaumen.ch" target="_blank" class="underline"> Login </a>
		</p>
	</div>
</footer>

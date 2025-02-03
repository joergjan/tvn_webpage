<script lang="ts">
	import 'lightgallery/css/lightgallery.css';
	import 'lightgallery/css/lg-thumbnail.css';
	import '../app.css';
	import '../fonts.css';
	import { page } from '$app/state';
	import { navItems } from '$lib/navbar';
	import { dev } from '$app/environment';
	import { injectAnalytics } from '@vercel/analytics/sveltekit';
	import BreadCrumb from '$lib/components/BreadCrumb.svelte';
	import SEO from '$lib/components/SEO.svelte';
	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';
	import { toggleMode, ModeWatcher, mode } from 'mode-watcher';
	import { Button } from '$lib/components/ui/button/index.js';
	import Divider from '$lib/components/Divider.svelte';

	let { children } = $props();

	injectAnalytics({ mode: dev ? 'development' : 'production' });

	let menu: boolean = $state(false);
</script>

<ModeWatcher />

<SEO />

<nav>
	<div class="mx-auto max-w-7xl px-4 lg:px-8">
		<div class="flex h-16 items-center justify-between">
			<div class="flex items-center">
				<a href="/">
					{#if $mode === 'light'}
						<img class="-mt-2 h-10 lg:mt-0 lg:h-12" src="/tvn_logo_black.png" alt="" />
					{:else}
						<img class="-mt-2 h-10 lg:mt-0 lg:h-12" src="/tvn_logo_white.png" alt="" />
					{/if}
				</a>
			</div>
			<div class="ml-auto hidden h-12 justify-items-end lg:flex">
				<ul class="-mr-2.5 flex items-center space-x-5">
					{#each navItems as { name, href }, i}
						<li
							class="${(page.url.pathname.includes(href) &&
								page.url.pathname !== '/' &&
								href !== '/') ||
							(page.url.pathname === '/' && page.url.pathname === href)
								? ' text-tvbluelight '
								: ' hover:text-tvbluelight hover:transition-all hover:duration-[400ms]'} inline-flex items-center px-1 pt-1"
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

			<div class="block lg:ml-6 lg:hidden">
				<div class="flex items-center">
					<div class="-mr-2 flex lg:hidden">
						<!-- Mobile menu button -->
						<button
							type="button"
							class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition-all duration-300 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded="false"
							onclick={() => {
								menu = !menu;
							}}
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
			<div class="lg:hidden" id="mobile-menu">
				<div class="space-y-1 px-2 pb-3 pt-2">
					{#each navItems as { name, href }}
						<a
							{href}
							class="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white"
							onclick={() => {
								menu = !menu;
							}}
						>
							{name}
						</a>
					{/each}
				</div>
			</div>
		{/if}
	</div>
</nav>

<main class="mx-auto mt-10 max-w-7xl px-6 lg:mt-14 lg:px-8">
	<div>
		{#if !menu}
			<BreadCrumb />
		{/if}
	</div>
	<div class="-my-5 lg:my-0">
		<Divider />
	</div>
	{@render children?.()}
</main>

<footer>
	<div class="mx-auto max-w-7xl overflow-hidden px-6 py-20 lg:px-8 lg:py-24">
		<Divider />
		<nav class="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6" aria-label="Footer">
			{#each navItems as { name, href }}
				<a {href} class="text-gray-400 hover:text-white">{name}</a>
			{/each}
		</nav>

		<div class="mt-16 flex justify-center">
			<Button onclick={toggleMode} variant="outline" size="icon">
				<Sun
					class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
				/>
				<Moon
					class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
				/>
				<span class="sr-only">Toggle theme</span>
			</Button>
		</div>

		<p class="mt-10 text-center text-sm/6 text-gray-400">
			&copy; {new Date().getFullYear()} TV Nussbaumen
		</p>

		<p class="mt-10 text-center text-sm/6 text-gray-400 hover:text-gray-300">
			<a href="https://studio.tvnussbaumen.ch" target="_blank" class="underline"> Login </a>
		</p>
	</div>
</footer>

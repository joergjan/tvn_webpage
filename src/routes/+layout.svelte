<script>
	import '../app.css';
	import { currentPage } from '$lib/components/stores';
	import { titles } from './navbar';

	let open = false;

	let current = 'burger';
	let currentPageValue = 0;

	currentPage.subscribe((value) => {
		currentPageValue = value;
	});

	function menuToggle() {
		if (open) {
			current = 'burger';
			open = false;
		} else {
			current = 'cross';
			open = true;
		}
	}

	let cookie = false;

	if (typeof window !== 'undefined') {
		if (localStorage.getItem('cookies_enabled') === '0') {
			cookie = false;
		} else {
			cookie = true;
		}
		localStorage.setItem('cookies_enabled', '0');
	}
</script>

<title>{titles[currentPageValue].title}</title>

<nav class="sticky top-0 z-20">
	<div class="bg-tvbluelight md:h-3 h-1 opacity-100" />
	<div
		class="bg-white mx-auto max-w-7xl pt-2 pb-2 md:pb-0 px-4 sm:px-6 lg:px-8 z-30 md:opacity-[98%]"
	>
		<div class="flex h-16 justify-between py-2 opacity-100">
			<div class="flex flex-shrink-0 items-center">
				<a href="/" on:click={() => currentPage.update((n) => (n = 0))}>
					<img
						class="h-12 lg:hidden md:block hidden"
						src="./images/logos/turner.png"
						alt="Turnverein Nussbaumen"
					/>
					<img
						class="h-12 md:hidden lg:block block"
						src="./images/logos/logo.png"
						alt="Turnverein Nussbaumen"
					/>
				</a>
			</div>
			<div class="hidden md:ml-6 md:flex md:space-x-8">
				{#key currentPage}
					{#each titles as title, i}
						{#if currentPageValue != i}
							<a
								href={title.href}
								class="inline-flex items-center border-b-2 border-tvbluelight hover:border-gray-400 hover px-1 pt-1 text font-medium"
								tabindex="-1"
								on:click={() => currentPage.update((n) => (n = i))}
								class:currentPage={currentPageValue === i}
								role="menuitem">{title.name}</a
							>
						{:else}
							<a
								href={title.href}
								class="inline-flex items-center border-b-2 border-gray-400 text-gray-400 px-1 pt-1 text font-medium"
								tabindex="-1"
								on:click={() => currentPage.update((n) => (n = i))}
								class:currentPage={currentPageValue === i}
								role="menuitem">{title.name}</a
							>
						{/if}
					{/each}
				{/key}
			</div>

			<div class="-mr-2 flex items-center md:hidden">
				<!-- Mobile menu button -->
				<button
					type="button"
					class=" {current === 'burger' ? 'burgerMenu' : 'hidden'}"
					aria-controls="mobile-menu"
					aria-expanded="false"
					on:click={menuToggle}
				>
					<svg
						id="burger"
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
				</button>
				<button
					type="button"
					class={current === 'cross' ? 'burgerMenu' : 'hidden'}
					aria-controls="mobile-menu"
					aria-expanded="false"
					on:click={menuToggle}
				>
					<svg
						id="cross"
						class="block h-6 w-6"
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
		<div class="md:hidden absolute bg-white w-full h-screen">
			<div class="mt-2 space-y-1">
				{#each titles as title}
					<a
						href={title.href}
						class="block px-4 py-2 hover place-content-end hover:bg-gray-100"
						on:click={menuToggle}>{title.name}</a
					>
				{/each}
			</div>
		</div>
	{/if}

	<div class="bg-white h-2 md:block hidden" />
	<div class="bg-gradient-to-b from-white h-3 md:opacity-[98%]" />
</nav>

<div class="relative">
	<div class="bg-white">
		<div class="py-5 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
			<slot />
		</div>
	</div>
	<footer>
		<div class="bg-tvbluelight h-1 mt-10 mb-8" />
		<div class="mx-auto max-w-7xl overflow-hidden pb-20 pt-0 px-6 lg:px-8">
			<nav class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
				{#each titles as title, i}
					<div class="pb-6">
						<a href={title.href} class="hover" on:click={() => currentPage.update((n) => (n = i))}
							>{title.name}</a
						>
					</div>
				{/each}
			</nav>
			<div class="mt-10 flex justify-center space-x-10">
				<a href="https://www.facebook.com/people/TV-Nussbaumen/100064088556190/" class="hover">
					<span class="sr-only">Facebook</span>
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path
							fill-rule="evenodd"
							d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
							clip-rule="evenodd"
						/>
					</svg>
				</a>

				<a href="https://www.instagram.com/tvnussbaumen/" class="hover">
					<span class="sr-only">Instagram</span>
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path
							fill-rule="evenodd"
							d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
							clip-rule="evenodd"
						/>
					</svg>
				</a>
			</div>
			<div class="mt-10 text-center text-xs leading-5 ">
				&copy; 2023 <a
					href="/"
					class="underline hover"
					on:click={() => currentPage.update((n) => (n = 0))}>Turnverein Nussbaumen</a
				>.
			</div>
		</div>
	</footer>
</div>

{#if cookie}
	<div aria-live="assertive" class="fixed inset-0 flex items-end px-4 py-6 sm:p-8">
		<div class="flex w-full flex-col items-center space-y-4 ">
			<!--
		Notification panel, dynamically insert this into the live region when it needs to be displayed
  
		Entering: "transform ease-out duration-300 transition"
		  From: "translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
		  To: "translate-y-0 opacity-100 sm:translate-x-0"
		Leaving: "transition ease-in duration-100"
		  From: "opacity-100"
		  To: "opacity-0"
	  -->
			<div
				class="w-full max-w-sm overflow-hidden rounded-lg shadow-lg ring-1 ring-gray-300 bg-white"
			>
				<div class="p-4">
					<div class="flex items-center">
						<div class="flex w-0 flex-1 justify-between">
							<p class="w-0 flex-1 text-sm font-semibold">Wir verwenden keine 🍪</p>
							<button
								type="button"
								class="ml-3 flex-shrink-0 rounded-md font-semibold text-sm text-tvbluelight hover "
								on:click={() => {
									cookie = false;
								}}
							>
								Okay
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

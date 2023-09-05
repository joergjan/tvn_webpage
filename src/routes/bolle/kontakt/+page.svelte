<script>
	let name = '';
	let email = '';
	let message = '';
	let phone = '';

	/** @type {import('./$types').PageData} */
	export let data;
	/** @type {import('./$types').ActionData} */
	export let form;
</script>

<div class="isolate">
	<div class="mx-auto max-w-2xl text-center">
		<h2 class="text-3xl font-bold tracking-tight sm:text-4xl">Nimm Kontakt mit uns auf</h2>
	</div>
	<form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
		<div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
			<div class="sm:col-span-2">
				<label for="last-name" class="block text-sm font-semibold leading-6">Name</label>
				<div class="mt-2.5">
					<input
						type="text"
						bind:value={name}
						placeholder="Max Muster"
						name="name"
						id="name"
						autocomplete="family-name"
						class="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>

			<div class="sm:col-span-2">
				<label for="email" class="block text-sm font-semibold leading-6">Email</label>
				<div class="mt-2.5">
					<input
						bind:value={email}
						placeholder="max.muster@bluewin.ch"
						type="email"
						name="email"
						id="email"
						autocomplete="email"
						class="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"
					/>
				</div>
			</div>
			<div class="sm:col-span-2">
				<label for="phone-number" class="block text-sm font-semibold leading-6">Telefon</label>
				<div class="relative mt-2.5">
					<input
						bind:value={phone}
						placeholder="079 123 45 67"
						type="tel"
						name="phone-number"
						id="phone-number"
						autocomplete="tel"
						class="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>
			<div class="sm:col-span-2">
				<label for="message" class="block text-sm font-semibold leading-6">Mitteilung</label>
				<div class="mt-2.5">
					<textarea
						bind:value={message}
						placeholder="Deine Mitteilung"
						name="message"
						id="message"
						rows="4"
						class="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
					/>
				</div>
			</div>
		</div>
		<div class="mt-10">
			<button
				on:click={() => handleSubmit()}
				type="submit"
				class="block w-full rounded-md bg-tvbluelight px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-tvblue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
				>absenden</button
			>
		</div>
	</form>
</div>

{#if form?.success}
	<!-- this message is ephemeral; it exists because the page was rendered in
           response to a form submission. it will vanish if the user reloads -->
	<p>Successfully logged in! Welcome back, {data.user.name}</p>
{/if}

<script lang="ts">
	import type { PageData } from './$types';
	import { contactDescription } from '$lib/components/SEO';

	export let data: PageData;
	$: ({ contact } = data);
</script>

<svelte:head>
	<meta name="description" content={contactDescription} />
</svelte:head>

<div class="px-6 lg:px-8">
	<div class="mx-auto max-w-2xl text-center">
		<h2 class="text-xl font-semibold tracking-tight text-white sm:text-7xl">Kontakt</h2>

		<p class="text-md mt-8 text-pretty font-medium text-gray-300 sm:text-xl/8">
			<a href="mailto:maja.fehr@example.com">{contact.mail}</a>
		</p>
		<div class="pt-5 text-sm text-gray-400">
			<p>{contact.firstname} {contact.lastname}</p>
			<p>{contact.street}</p>
			<p>{contact.postcode} {contact.place}</p>
		</div>
	</div>
</div>

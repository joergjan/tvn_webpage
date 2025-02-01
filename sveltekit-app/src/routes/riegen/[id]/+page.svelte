<script lang="ts">
	import { urlFor } from '$lib/sanity/image';
	import { breadCrumbTitle } from '$lib/stores';

	let { data } = $props();
	let riege = data.riege;

	$effect(() => {
		$breadCrumbTitle = riege.name;
	});
</script>

<div>
	<h1>{riege.name}</h1>

	<div class="relative h-56 w-full">
		<img
			src={riege.mainImage ? urlFor(riege.mainImage).url() : '/favicon.png'}
			alt={riege.name}
			class="${riege.mainImage
				? ''
				: ' bg-gray-800 '} absolute inset-0 size-full rounded-lg bg-gray-50 object-cover"
		/>
	</div>

	{#each riege.kontaktLeiter as leiter}
		<p>{leiter.fullname}</p>
		<a href="mailto:{leiter.mail}">{leiter.mail}</a>
	{/each}

	<p class="font-semibold">{riege.body}</p>
</div>

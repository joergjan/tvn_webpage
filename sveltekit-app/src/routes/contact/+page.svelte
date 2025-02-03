<script lang="ts">
	import type { PageData } from './$types';
	import Person from '$lib/components/Person.svelte';
	import Divider from '$lib/components/Divider.svelte';

	export let data: PageData;
	$: ({ leiter, vorstand } = data);

	$: leiter && console.log(leiter);
</script>

<h1>Vorstand</h1>

<ul
	role="list"
	class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
>
	{#each vorstand as person}
		<li>
			<Person {person} />
		</li>
	{/each}
</ul>
<Divider />

<h1>Leiter</h1>
<ul
	role="list"
	class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
>
	{#each leiter as person}
		<li>
			<Person {person} />
		</li>
	{/each}
</ul>

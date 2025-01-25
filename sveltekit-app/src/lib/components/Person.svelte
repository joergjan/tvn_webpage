<script lang="ts">
	export let person: Person;
	import RiegeBadge from '$lib/components/riege/RiegeBadge.svelte';
</script>

<img
	class="mx-auto size-56 rounded-full"
	src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
	alt={person.fullname}
/>
<h3 class="mt-6 text-center text-base/7 font-semibold tracking-tight">
	{person.fullname}
</h3>
{#if person.role}
	<p class="text-center text-sm/6">{person.role}</p>
{/if}

{#if person.riege}
	{#each person.riege as riege}
		<RiegeBadge {riege} />
	{/each}
{/if}
<ul role="list" class="mt-6 flex justify-center gap-x-6">
	<li>
		<a href={'mailto:' + person.mail} class="">
			<span class="sr-only">Email</span>
			{person.mail}
		</a>
	</li>
</ul>

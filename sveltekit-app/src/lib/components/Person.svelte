<script lang="ts">
	export let person: Person;
	import { Button } from '$lib/components/ui/button';
	import Avatar from '$lib/components/Avatar.svelte';
	import { urlFor } from '$lib/sanity/image';
	import Mail from 'lucide-svelte/icons/mail';
</script>

<div class="">
	<div class="mx-auto aspect-square h-64">
		{#if person.mainImage}
			<img
				class="mx-auto size-56 rounded-full object-cover"
				src={urlFor(person.mainImage).url()}
				alt={person.fullname}
			/>
		{:else}
			<div class="mx-auto size-56 rounded-full object-cover">
				<Avatar />
			</div>
		{/if}
	</div>

	<h3 class="mt-6 text-center text-base/7 font-semibold tracking-tight">
		{person.fullname}
	</h3>
	{#if person.role}
		<p class="text-center text-sm/6">{person.role}</p>
	{/if}

	{#if person.riege}
		<div class="">
			{#each person.riege as riege}
				<div class="mx-auto flex justify-center">
					<a
						class="bg-tvbluelight hover:bg-tvblue my-0.5 rounded-full px-4 py-2 text-xs text-white transition-all duration-300"
						href={'/riegen/' + riege._id}
					>
						{riege.name}
					</a>
				</div>
			{/each}
		</div>
	{/if}
	<ul role="list" class="mt-6 flex justify-center gap-x-6">
		<li>
			<a href={'mailto:' + person.mail} class="">
				<span class="sr-only">Email</span>
				<Button href={'mailto:' + person.mail} variant="secondary">
					<Mail class="mr-2 h-4 w-4" />
					{person.mail}
				</Button>
			</a>
		</li>
	</ul>
</div>

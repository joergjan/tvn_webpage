<script lang="ts">
	import { navItems } from '$lib/navbar';
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>TV Nussbaumen</title>
	{#each navItems as { name, href, description }}
		{#if page.url.pathname === href}
			<meta name="description" content={description} />
			{#if href === '/'}
				<title>TV Nussbaumen</title>
			{:else}
				<title>TVN | {name}</title>
			{/if}
		{/if}
	{/each}
</svelte:head>

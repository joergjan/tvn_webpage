<script lang="ts">
	import * as Breadcrumb from '$lib/components/ui/breadcrumb/index.js';
	import { navItems } from '$lib/navbar';
	import { page } from '$app/state';
	import { untrack } from 'svelte';
	import { writable } from 'svelte/store';
	import { breadCrumbTitle } from '$lib/stores';

	let breadcrumbItems = $state([{ label: 'Home', href: '/' }]);

	const pathname = $derived(page.url.pathname);

	$effect(() => {
		breadcrumbItems = [{ label: 'Home', href: '/' }];
		let title = $breadCrumbTitle;

		let currentPath = '';
		let segments = pathname.split('/').filter(Boolean);

		untrack(() =>
			segments.forEach((segment, index) => {
				currentPath += `/${segment}`;

				// Find the matching navItem based on the href
				const navItem = navItems.find((item) => item.href.replace(/^\/+/, '') === segment);

				let label: string;
				if (!navItem && title) {
					label = title;
				} else {
					label = navItem ? navItem.name : segment;
				}

				// If this is the last segment, it will not be a link
				const isLast = index === segments.length - 1;

				breadcrumbItems.push({
					label: label,
					href: isLast ? '' : currentPath // If last segment, leave href empty
				});
			})
		);
	});
</script>

<Breadcrumb.Root>
	<Breadcrumb.List>
		{#each breadcrumbItems as item, index (item.href)}
			<Breadcrumb.Item>
				{#if item.href}
					<Breadcrumb.Link href={item.href}>{item.label}</Breadcrumb.Link>
				{:else}
					<Breadcrumb.Page>{item.label}</Breadcrumb.Page>
				{/if}
			</Breadcrumb.Item>

			{#if index < breadcrumbItems.length - 1}
				<Breadcrumb.Separator />
			{/if}
		{/each}
	</Breadcrumb.List>
</Breadcrumb.Root>

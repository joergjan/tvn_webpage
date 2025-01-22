<script lang="ts">
	import { ExternalLink } from 'lucide-svelte';
	import { formatDate } from '$lib/utils';
	import { urlFor } from '$lib/sanity/image';
	import * as Accordion from '$lib/components/ui/accordion';
	import { Skeleton } from '$lib/components/ui/skeleton';

	export let events: Anlass[] = [];
</script>

<Accordion.Root>
	{#if events}
		{#each events as { title, image, dateFrom, dateTo, description }, i}
			<Accordion.Item value="value-${i}">
				<Accordion.Trigger class="group">
					<div class="md:flex">
						<div class="w-36 text-left">
							{#if dateFrom == dateTo}
								{formatDate(dateFrom)}
							{:else}
								<div>
									<p>{formatDate(dateFrom)}</p>
									<p class="flex h-2 items-center">-</p>
									<p>{formatDate(dateTo)}</p>
								</div>
							{/if}
						</div>
						<p class="md:group-hover:underline">{title}</p>
					</div>
				</Accordion.Trigger>
				<Accordion.Content>{description}</Accordion.Content>
			</Accordion.Item>
		{/each}
	{:else}
		<Skeleton class="h-[20px] w-[100px] rounded-full" />
	{/if}
</Accordion.Root>

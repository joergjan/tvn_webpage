<script lang="ts">
	import { formatDate } from '$lib/utils';
	import * as Accordion from '$lib/components/ui/accordion';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { SquareArrowOutUpRight } from 'lucide-svelte';

	export let events: Anlass[] = [];

	console.log(events);
</script>

<div class="mt-10">
	<Accordion.Root>
		{#if events}
			{#each events as { title, dateFrom, dateTo, description, href }, i}
				<Accordion.Item value="value-${i}">
					<Accordion.Trigger class="group">
						<div class="md:flex">
							<div class="text-left md:w-[10rem]">
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
							<p class="text-left md:group-hover:underline">{title}</p>
						</div>
					</Accordion.Trigger>
					<Accordion.Content>
						<div>
							<p>{description}</p>
							<div class="flex">
								{#if href}
									<a class="mt-2 inline-flex items-center underline" {href}>
										Weitere Infos <SquareArrowOutUpRight class="h-4" />
									</a>
								{/if}
							</div>
						</div>
					</Accordion.Content>
				</Accordion.Item>
			{/each}
		{:else}
			<Skeleton class="h-[20px] w-[100px] rounded-full" />
		{/if}
	</Accordion.Root>
</div>

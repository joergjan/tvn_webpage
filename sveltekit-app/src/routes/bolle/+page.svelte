<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion/index.js';
	import * as Table from '$lib/components/ui/table';
	import Divider from '$lib/components/Divider.svelte';
	import { page } from '$app/state';
	import { mode } from 'mode-watcher';
	import { browser } from '$app/environment';
	import Skeleton from '$lib/components/ui/skeleton/skeleton.svelte';
	import { SquareArrowOutUpRight } from 'lucide-svelte';
	import { formatDate } from '$lib/utils';

	let { data } = $props();

	let bolleFaq = data.bolleFaq;
	let bolleProgramm = data.bolleProgramm;
	let bolle = data.bolle;
</script>

<h4>für jung und alt</h4>
<h1>Bollä Dunnschtig</h1>
<div class="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base/7 lg:max-w-none lg:grid-cols-2">
	<div>
		<p class="mt-8">
			{bolle.description}
		</p>
	</div>
	<div class="lg:-mt-28">
		<div>
			<h3>Datum</h3>
			<p>{formatDate(bolle.date)}</p>
		</div>
		<Divider />
		<div>
			<h3>Tickets</h3>
			<p>Tickets sind an der Abendkasse erhältlich</p>
		</div>
		<Divider />
		<div>
			<h3>Programm</h3>
			<Table.Root>
				<Table.Header>
					<Table.Row>
						<Table.Head class="w-[100px]">Uhrzeit</Table.Head>
						<Table.Head>Was</Table.Head>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{#each bolleProgramm as { title, time }}
						<Table.Row>
							<Table.Cell class="font-medium">{time}</Table.Cell>
							<Table.Cell>{title}</Table.Cell>
						</Table.Row>
					{/each}
				</Table.Body>
			</Table.Root>
		</div>
	</div>
</div>

<h2>FAQ</h2>
<Accordion.Root>
	{#each bolleFaq as { title, answer }, i}
		<Accordion.Item value="value-${i}">
			<Accordion.Trigger class="group">
				{title}
			</Accordion.Trigger>
			<Accordion.Content>
				{answer}
			</Accordion.Content>
		</Accordion.Item>
	{/each}
</Accordion.Root>

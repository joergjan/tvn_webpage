<script>
	import Divider from '$lib/components/Divider.svelte';
	import * as Table from '$lib/components/ui/table';
	import QRCode from 'qrcode';
	import { page } from '$app/state';
	import { mode } from 'mode-watcher';
	import { browser } from '$app/environment';
	import Skeleton from '$lib/components/ui/skeleton/skeleton.svelte';

	const opts = {
		errorCorrectionLevel: 'L',
		type: 'image/jpeg',
		margin: 0,
		color: {
			dark: $mode === 'light' ? '#010b1f' : '#ffffff',
			light: $mode === 'light' ? '#ffffff' : '#010b1f'
		}
	};

	let qrPageUrlDataUrl = QRCode.toDataURL(
		'https://eventfrog.ch/de/p/gruppen/turnunterhaltung-7182422694880573270.html',
		opts
	);
</script>

<h4>Abendunterhaltung</h4>
<h1>Märchenstunde</h1>
<div class="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base/7 lg:max-w-none lg:grid-cols-2">
	<div>
		<p>Und wenn sie noch nicht gestorben sind ...</p>
		<p class="mt-8">
			Der Turnverein Nussbaumen lädt zur Märchenstunde ein. In gemütlicher Atmosphäre werden die
			verschiedenen Riegen ihre Darbietungen präsentieren. Lass dich verzaubern und geniesse dabei
			unsere Festwirtschaft oder kauf Lose und gewinne zauberhafte Preise an der Tombola.
		</p>
	</div>
	<div class="lg:-mt-28">
		<div>
			<h3>Datum</h3>
			<p>28. März 2025</p>
			<p>29. März 2025</p>
		</div>
		<Divider />
		<div>
			<h3>Tickets</h3>
			<p>
				Tickets sind an der Abendkasse oder über <a
					class="underline"
					target="_blank"
					href="https://eventfrog.ch/de/p/gruppen/turnunterhaltung-7182422694880573270.html"
				>
					Eventfrog
				</a> erhältlich
			</p>
			<br />
			{#await qrPageUrlDataUrl}
				<Skeleton class="aspect-square h-32 w-32" />
			{:then dataUrl}
				<img class="qrcode h-32" src={dataUrl} alt="QR Code mit Link zu Eventfrog" />
			{/await}
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
					<Table.Row>
						<Table.Cell class="font-medium">18:30</Table.Cell>
						<Table.Cell>Türöffnung</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell class="font-medium">20:00</Table.Cell>
						<Table.Cell>Programmstart</Table.Cell>
					</Table.Row>
					<Table.Row>
						<Table.Cell class="font-medium">22:00</Table.Cell>
						<Table.Cell>Barbetrieb</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table.Root>
		</div>
	</div>
</div>

<div class="relative overflow-hidden pt-10">
	<div class="mx-auto max-w-6xl transition-all duration-300">
		{#if browser}
			<img
				class="-mb-4 w-full rounded-xl shadow-2xl ring-1 ring-gray-900/10"
				src="/maerlistund.jpg"
				alt=""
			/>
		{:else}
			<Skeleton class="-mb-4 aspect-[674/479] h-full w-full rounded-xl" />
		{/if}

		<div class="relative" aria-hidden="true">
			<div class="from-background absolute -inset-x-20 bottom-0 bg-gradient-to-t pt-[7%]"></div>
		</div>
	</div>
</div>

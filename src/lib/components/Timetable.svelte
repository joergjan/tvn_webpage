<script lang="ts">
	let sbbfrom = '';
	let sbbto = 'Nussbaumen+Schulhaus';
	let sbbdate: Date;
	let sbbdateInput: string = '';
	let sbbtime = '';
	let formattedDate = '';
	let change: boolean = false;

	$: sbbdate = new Date(sbbdateInput);
	$: formattedDate = `${sbbdate.getDate().toString().padStart(2, '0')}.${(sbbdate.getMonth() + 1)
		.toString()
		.padStart(2, '0')}.${sbbdate.getFullYear()}`;
	$: change = sbbdateInput !== '';
	$: url = `https://www.sbb.ch/de/kaufen/pages/fahrplan/fahrplan.xhtml?von=${sbbfrom}&nach=${sbbto}&datum=${formattedDate}&zeit=${sbbtime}&an=true&suche=true`;
</script>

<img alt="SBB" src="/images/logos/sbb.svg" class="hidden sm:block h-8 my-3 mt-8" />

<div class="grid sm:grid-cols-2 grid-rows-2 sm:grid-rows-1">
	<div class="row-span-1 col-start-1 row-start-1">
		<div class="">
			<div>Von:</div>
			<input
				class={sbbfrom == ''
					? 'px-2 py-1 border border-red-500 rounded-sm '
					: 'px-2 py-1 border rounded-sm'}
				type="text"
				bind:value={sbbfrom}
				placeholder="Ort"
			/>
		</div>
		<div>
			<div class="mt-2">Nach:</div>
			<div>Nussbaumen Schulhaus</div>
		</div>
	</div>
	<div class="row-span-1 sm:col-start-2 row-start-2 sm:row-start-1 sm:pb-0 pb-5">
		<div class="">
			<div>Ankunftszeit:</div>
			<input
				class={sbbtime == ''
					? 'px-2 py-1 border border-red-500 rounded-sm'
					: 'px-2 py-1 border rounded-sm'}
				type="time"
				bind:value={sbbtime}
			/>
		</div>
		<div class="mt-2">
			<div>Datum:</div>
			<input
				class={!change
					? 'px-2 py-1 border border-red-500 rounded-sm'
					: 'px-2 py-1 border rounded-sm'}
				type="date"
				bind:value={sbbdateInput}
			/>
		</div>
	</div>
</div>

<div class="sm:mt-5">
	<a
		class="bg-tvbluelight hover:bg-tvblue text-white rounded-md py-2 px-3"
		target="_blank"
		rel="noreferrer"
		href={url}>Verbindung suchen</a
	>
</div>

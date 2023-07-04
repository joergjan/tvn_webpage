<script>
	let sbbfrom = '';
	let sbbto = 'Nussbaumen Schulhaus';
	let sbbdate = '28.03.2023';
	let sbbtime = '';

	$: url = `https://www.sbb.ch/en/buying/pages/fahrplan/fahrplan.xhtml?von=${sbbfrom}&nach=${sbbto}&datum=${sbbdate}&zeit=${sbbtime}&an=true&suche=true`;
</script>

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
			<div>{sbbto}</div>
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
			<div>{sbbdate}</div>
		</div>
	</div>
</div>

<div class="sm:mt-5">
	<a
		class="bg-tvblue hover:bg-tvbluelight text-white rounded-md py-2 px-3"
		target="_blank"
		rel="noreferrer"
		href={url}>Verbindung suchen</a
	>
</div>

<img alt="sbb logo" src="/images/logos/Extension.svg" class="hidden sm:block h-8 my-3 mt-8" />

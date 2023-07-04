<script>
	let sbbfrom = '';
	let sbbto = 'Nussbaumen Schulhaus';
	let sbbdate = '28.03.2023';
	let sbbtime = '20:00';

	$: sbbtime && console.log(sbbtime);

	$: url = `https://www.sbb.ch/en/buying/pages/fahrplan/fahrplan.xhtml?von=${sbbfrom}&nach=${sbbto}&datum=${sbbdate}&zeit=${sbbtime}&an=true&suche=true`;
</script>

<div class="grid grid-cols-2 space-y-5">
	<div>
		<div>
			<div>Von:</div>
			<input type="text" bind:value={sbbfrom} placeholder="Ort" />
		</div>
		<div>
			<div>Nach:</div>
			<div>{sbbto}</div>
		</div>
	</div>
	<div>
		<div>
			<div>Ankunftszeit:</div>
			<input type="time" bind:value={sbbtime} />
		</div>
		<div>
			<div>Datum:</div>
			<div>{sbbdate}</div>
		</div>
	</div>
</div>

<a class="bg-tvblue text-white rounded-md py-2 px-3 mt-3" target="_blank" rel="noreferrer" href={url}>Verbindung suchen</a>

<img alt="sbb logo" src="/images/logos/Extension.svg" class="h-8 my-3" />

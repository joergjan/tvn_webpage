<script>
	import { fade } from 'svelte/transition';

	let barWidth = 0;
	/**
	 * @type {string | number | NodeJS.Timeout | undefined}
	 */
	let progress; // for setInterval

	const addColor = () => (barWidth += 0.5);

	const makeProgress = () => {
		progress = setInterval(addColor, 15);
	};

	$: if (barWidth === 100) {
		stopProgress();
	}

	const stopProgress = () => {
		clearInterval(progress);
	};

	makeProgress();
</script>

<title>TV Nussbaumen</title>

{#if barWidth != 100}
	<div class="grid grid-cols-3">
		<img class="col-start-2" src="./images/gif/runnerColor.gif" alt="athlete running gif" />
	</div>
	<div class="w-full relative">
		<div class="bg-tvbluelight h-4 rounded" style="width: {barWidth}%" />
	</div>
{:else}
	<div class="" transition:fade>
		<img class="p-20" src="./images/logos/turner_webpage.png" alt="turner" />
	</div>
{/if}

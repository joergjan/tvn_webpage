<script>
	import { riegen } from './riegen';
	import { fade } from 'svelte/transition';
	import RiegeModal from '$lib/components/RiegeModal.svelte';

	const days = ['Mo', 'Di', 'Mi', 'Do', 'Fr'];
	const daysDDDD = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'];

	let showRiege = false;
	let currentRiege = 0;

	const riegenWithStartEndTimes = riegen.map((riege) => {
		const time1 = riege.time1
			? riege.time1.replace(/\s/g, '').replace('Uhr', '').split('-')
			: ['', ''];
		const time2 = riege.time2
			? riege.time2.replace(/\s/g, '').replace('Uhr', '').split('-')
			: ['', ''];
		const rows1 = Math.abs((timeToMinutes(time1[0]) - timeToMinutes(time1[1])) / 15);
		const rows2 = Math.abs((timeToMinutes(time2[0]) - timeToMinutes(time2[1])) / 15);
		let startRow1 = Math.abs((timeToMinutes(time1[0]) - timeToMinutes('08:15')) / 15);
		let startRow2 = Math.abs((timeToMinutes(time2[0]) - timeToMinutes('08:15')) / 15);
		startRow1 = startRow1 > 30 ? startRow1 - 16 : startRow1;
		startRow2 = startRow2 > 30 ? startRow2 - 16 : startRow2;
		const dayIndex1 = daysDDDD.indexOf(riege.day1) + 1;
		const dayIndex2 = daysDDDD.indexOf(riege.day2) + 1;

		return {
			name: riege.name,
			day1: riege.day1,
			day2: riege.day2,
			dayIndex1: dayIndex1,
			dayIndex2: dayIndex2,
			time1: riege.time1,
			time2: riege.time2,
			twodays: riege.twodays,
			rows1: rows1,
			rows2: rows2,
			startRow1: startRow1,
			endRow1: startRow1 + rows1,
			startRow2: startRow2,
			endRow2: startRow2 + rows2,
			training1Link: riege.training1Link,
			training2Link: riege.training2Link
		};
	});

	/**
	 * @param {string} time
	 */
	function timeToMinutes(time) {
		const [hours, minutes] = time.split(':').map(Number);
		return hours * 60 + minutes;
	}

	console.log(riegenWithStartEndTimes);

	const times = [
		'09:00',
		'10:00',
		'--',
		'16:00',
		'17:00',
		'18:00',
		'19:00',
		'20:00',
		'21:00',
		'22:00'
	];

	const date = new Date();
	let currentDayDate = date.getDate();

	let calDays = getWeekdayDates();

	function getWeekdayDates() {
		const today = new Date();
		const dayOfWeek = today.getDay();
		const daysToAdd = dayOfWeek >= 1 && dayOfWeek <= 5 ? -dayOfWeek + 1 : dayOfWeek === 0 ? 1 : 2;
		const monday = new Date(today.getFullYear(), today.getMonth(), today.getDate() + daysToAdd);
		const dates = [];
		for (let i = 0; i < 5; i++) {
			const date = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + i);
			dates.push(date.getDate());
		}
		return dates;
	}

	function showModal() {
		if (showRiege) {
			showRiege = false;
		} else {
			showRiege = true;
		}
	}

	function handleClose() {
		showModal();
	}
</script>

<div in:fade class="hidden sm:flex h-full flex-col">
	<div class="isolate flex flex-auto flex-col overflow-auto bg-white">
		<div style="width: 165%" class="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full">
			<div
				class="sticky top-0 z-30 flex-none bg-white shadow ring-1 ring-black ring-opacity-5 sm:pr-8"
			>
				<div class="grid grid-cols-5 text-sm leading-6 text-gray-500 sm:hidden">
					{#each calDays as calDay, i}
						<button type="button" class="flex flex-col items-center pb-3 pt-2"
							><span
								class={currentDayDate == calDay
									? 'px-2 py-1 sm:mr-2 bg-tvblue rounded-full text-white'
									: 'sm:mr-2'}
								>{days[i]}
							</span>
							<span class="items-center justify-center font-semibold text-gray-900">{calDay}</span>
						</button>
					{/each}
				</div>

				<div
					class="-mr-px hidden grid-cols-5 divide-x divide-gray-100 border-r border-gray-100 text-sm leading-6 text-gray-500 sm:grid"
				>
					<div class="col-end-1 w-14" />

					{#each calDays as calDay, i}
						<div class="flex items-center justify-center py-3 text-sm">
							<span
								class={currentDayDate == calDay
									? 'px-2 py-1 sm:mr-2 bg-tvblue rounded-full text-white'
									: 'sm:mr-2'}
								>{days[i]}
							</span>
							<span class="items-center justify-center font-semibold text-gray-900">{calDay}</span>
						</div>
					{/each}
				</div>
			</div>
			<div class="flex flex-auto">
				<div class="sticky left-0 z-10 w-14 flex-none bg-white ring-1 ring-gray-100" />
				<div class="grid flex-auto grid-cols-1 grid-rows-1">
					<!-- Horizontal lines -->
					<div
						class="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
						style="grid-template-rows: repeat(20, minmax(2rem, 1fr))"
					>
						<div />
						{#each times as time}
							{#if !time.includes('--')}
								<div>
									<div
										class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400"
									>
										{time}
									</div>
								</div>
								<div />
							{:else}
								<div>
									<div
										class="sticky left-0 z-20 -ml-14 -mt-2.5 w-14 pr-2 text-right text-xs leading-5 text-gray-400"
									>
										{time}
									</div>
								</div>
								<div />
							{/if}
						{/each}
					</div>

					<!-- Vertical lines -->
					<div
						class="col-start-1 col-end-2 row-start-1 hidden grid-cols-5 grid-rows-1 divide-x divide-gray-100 sm:grid sm:grid-cols-5"
					>
						<div class="col-start-1 row-span-full" />
						<div class="col-start-2 row-span-full" />
						<div class="col-start-3 row-span-full" />
						<div class="col-start-4 row-span-full" />
						<div class="col-start-5 row-span-full" />
						<div class="col-start-6 row-span-full w-8" />
					</div>

					<!-- Events -->
					<ol
						class="col-start-1  row-start-1 grid grid-cols-1 sm:grid-cols-5 sm:pr-8"
						style="grid-template-rows: 1rem repeat(39, minmax(0, 1fr)) auto"
					>
						{#each riegenWithStartEndTimes as riege, i}
							<li
								class="relative flex col-start-{riege.dayIndex1} hover:scale-102"
								style="grid-row: {riege.startRow1} / span {riege.rows1}"
							>
								<button
									on:click={() => {
										currentRiege = i;
										showModal();
									}}
									class="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-tvbluelight text-white hover:bg-tvblue p-2 text-xs shadow-md"
								>
									<p class="order-1 font-semibold ">{riege.name}</p>
									<p class="">
										{riege.time1}
									</p>
								</button>
							</li>
							{#if riege.twodays}
								<li
									class="relative hover:scale-102 flex col-start-{riege.dayIndex2}"
									style="grid-row: {riege.startRow2} / span {riege.rows2}"
								>
									<button
										on:click={() => {
											currentRiege = i;
											showModal();
										}}
										class="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-tvbluelight p-2 text-xs text-white hover:bg-tvblue shadow-md"
									>
										<p class="order-1 font-semibold ">{riege.name}</p>
										<p class=" ">
											{riege.time2}
										</p>
									</button>
								</li>
							{/if}
						{/each}
					</ol>
				</div>
			</div>
		</div>
	</div>
</div>

<div class="block sm:hidden">
	<ul class="divide-y divide-gray-100">
		{#each riegen as riege, i}
			<li class="flex items-center justify-between gap-x-6 py-5">
				<button
					class="w-full"
					on:click={() => {
						currentRiege = i;
						showModal();
					}}
				>
					<div class="min-w-0">
						<div class="flex items-start gap-x-3">
							<p class="text-sm font-semibold leading-6 text-gray-900">{riege.name}</p>
						</div>
						<div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
							<p class="whitespace-nowrap">
								{riege.day1}
								{riege.time1}
							</p>
						</div>

						{#if riege.twodays}
							<div class="mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500">
								<p class="whitespace-nowrap">
									{riege.day2}
									{riege.time2}
								</p>
							</div>
						{/if}
					</div>
				</button>
			</li>
		{/each}
	</ul>
</div>

{#if showRiege}
	<RiegeModal
		on:click_outside={showModal}
		on:close={handleClose}
		name={riegen[currentRiege].name}
		time1={riegen[currentRiege].time1}
		time2={riegen[currentRiege].time2}
		day1={riegen[currentRiege].day1}
		day2={riegen[currentRiege].day2}
		twodays={riegen[currentRiege].twodays}
		age={riegen[currentRiege].age}
		description={riegen[currentRiege].description}
		imageUrl={riegen[currentRiege].imageUrl}
		imageUrl2={riegen[currentRiege].imageUrl2}
		imageUrl3={riegen[currentRiege].imageUrl3}
		leiterName={riegen[currentRiege].leiter.name}
		leiterImageUrl={riegen[currentRiege].leiter.imageUrl}
	/>
{/if}

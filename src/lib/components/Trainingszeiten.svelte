<script lang="ts">
	import RiegeModal from '$lib/components/RiegeModal.svelte';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';
	import { onMount } from 'svelte';
	import { riegen } from '$lib/scripts/stores';
	import LoadAnimation from '$lib/components/LoadAnimation.svelte';
	import { fade } from 'svelte/transition';

	const days = ['Mo', 'Di', 'Mi', 'Do', 'Fr'];
	const daysDDDD = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'];

	let riegenWithStartEndTimes = [];

	$: riegenWithStartEndTimes = $riegen.map((riege) => getRiegeTimes(riege));

	function getRiegeTimes(riege) {
		// Assuming riege.trainingszeiten is sorted by weekday
		const day1 = riege.trainingszeiten[0].weekday.name;
		const day2 = riege.trainingszeiten[1] ? riege.trainingszeiten[1].weekday.name : null;
		const dayIndex1 = riege.trainingszeiten[0].weekday.id;
		const dayIndex2 = riege.trainingszeiten[1] ? riege.trainingszeiten[1].weekday.id : null;
		const fromTime1 = parseLocalTime(riege.trainingszeiten[0].from);
		const toTime1 = parseLocalTime(riege.trainingszeiten[0].to);
		const fromTime2 = riege.trainingszeiten[1]
			? parseLocalTime(riege.trainingszeiten[1].from)
			: null;
		const toTime2 = riege.trainingszeiten[1] ? parseLocalTime(riege.trainingszeiten[1].to) : null;
		const twodays = riege.trainingszeiten.length > 1;
		const rows1 = calculateRows(riege.trainingszeiten[0].from, riege.trainingszeiten[0].to);
		const rows2 = riege.trainingszeiten[1]
			? calculateRows(riege.trainingszeiten[1].from, riege.trainingszeiten[1].to)
			: null;
		const startRow1 = calculateStartRow(riege.trainingszeiten[0].from);
		const startRow2 = riege.trainingszeiten[1]
			? calculateStartRow(riege.trainingszeiten[1].from)
			: null;

		return {
			name: riege.name,
			day1: day1,
			day2: day2,
			dayIndex1: dayIndex1,
			dayIndex2: dayIndex2,
			fromTime1: fromTime1,
			fromTime2: fromTime2,
			toTime1: toTime1,
			toTime2: toTime2,
			twodays: twodays,
			rows1: rows1,
			rows2: rows2,
			startRow1: startRow1,
			endRow1: startRow1 + rows1,
			startRow2: startRow2,
			endRow2: startRow2 ? startRow2 + rows2 : null
		};
	}

	function parseLocalTime(isoString) {
		const date = new Date(isoString);
		const localDate = new Date();
		localDate.setHours(date.getUTCHours());
		localDate.setMinutes(date.getUTCMinutes());
		return localDate;
	}

	function calculateRows(from, to) {
		// Convert from and to from ISO 8601 strings to Date objects
		const fromDate = new Date(from);
		const toDate = new Date(to);

		// Calculate the difference in minutes between from and to
		const diffMinutes = (toDate.getTime() - fromDate.getTime()) / 60000;

		// Assuming each row represents a 5-minute interval
		return diffMinutes / 5;
	}

	function calculateStartRow(from) {
		// Convert from from an ISO 8601 string to a Date object
		const fromDate = new Date(from);

		// Calculate the difference in minutes between from and '09:15'
		let startRow = (fromDate.getHours() * 60 + fromDate.getMinutes() - (9 * 60 + 15)) / 5;

		// Adjust the start row based on whether it's greater than 30
		startRow = startRow > 30 ? startRow - 52 : startRow - 4;

		return startRow;
	}

	let showRiege = false;
	let currentRiege = 0;

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

	function formatTime(isoString) {
		const date = new Date(isoString);
		const hours = String(date.getHours()).padStart(2, '0');
		const minutes = String(date.getMinutes()).padStart(2, '0');
		return `${hours}:${minutes}`;
	}
</script>

<IntersectionObserver animation="fade-in">
	<div class="hidden sm:flex h-full flex-col">
		<div class="isolate flex flex-auto flex-col overflow-auto">
			<div
				style="width: 165%"
				class="flex max-w-full flex-none flex-col sm:max-w-none md:max-w-full"
			>
				<div class="sticky top-0 z-30 flex-none shadow ring-1 ring-black ring-opacity-5 sm:pr-8">
					<div class="grid grid-cols-5 text-sm leading-6 text-gray-500 sm:hidden">
						{#each calDays as calDay, i}
							<button type="button" class="flex flex-col items-center pb-3 pt-2"
								><span
									class={currentDayDate == calDay
										? 'px-2 py-1 sm:mr-2 bg-tvblue rounded-full text-white'
										: 'sm:mr-2'}
									>{days[i]}
								</span>
								<span class="items-center justify-center font-semibold text-gray-900">{calDay}</span
								>
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
								<span class="items-center justify-center font-semibold text-gray-900">{calDay}</span
								>
							</div>
						{/each}
					</div>
				</div>
				<div class="flex flex-auto">
					<div class="sticky left-0 z-10 w-14 flex-none ring-1 ring-gray-100" />
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
							class="col-start-1 row-start-1 grid grid-cols-1 sm:grid-cols-5 sm:pr-8 relative"
							style="grid-template-rows: 1rem repeat(117, minmax(0, 1fr)) auto"
						>
							{#if riegenWithStartEndTimes.length > 0}
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
											class="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-tvbluelight text-white hover:bg-tvblue p-2 shadow-md"
										>
											<p class="order-1 font-semibold text-sm">{riege.name}</p>
											<p class="text-xs">
												{formatTime(riege.toTime1)} - {formatTime(riege.fromTime1)}
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
												<p class="order-1 font-semibold">{riege.name}</p>
												<p class=" ">
													{formatTime(riege.toTime2)} - {formatTime(riege.fromTime2)}
												</p>
											</button>
										</li>
									{/if}
								{/each}
							{:else}
								<div class="absolute top-1/2 transform -translate-y-1/2 right-0 left-0">
									<LoadAnimation />
								</div>
							{/if}
						</ol>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="block sm:hidden">
		<ul class="divide-y divide-gray-200 relative min-h-80">
			{#if riegenWithStartEndTimes.length > 0}
				{#each riegenWithStartEndTimes as riege, i}
					<li class="flex items-center justify-between py-3">
						<button
							class="w-full relative"
							on:click={() => {
								currentRiege = i;
								showModal();
							}}
						>
							<div class="">
								<div class="flex items-start">
									<p class="font-semibold text-gray-900">{riege.name}</p>
								</div>
								<div class="mt-1 flex items-center text-gray-500">
									<div class="flex whitespace-nowrap">
										{riege.day1}
										<div class="pl-2">
											{formatTime(riege.toTime1)} - {formatTime(riege.fromTime1)}
										</div>
									</div>
								</div>

								{#if riege.twodays}
									<div class="mt-1 flex items-center text-gray-500">
										<div class="flex whitespace-nowrap">
											{riege.day2}
											<div class="pl-2">
												{formatTime(riege.toTime2)} - {formatTime(riege.fromTime2)}
											</div>
										</div>
									</div>
								{/if}
							</div>
							<div class="absolute right-5 top-1/2 transform -translate-y-1/2 -rotate-45 text-xl">
								&rarr;
							</div>
						</button>
					</li>
				{/each}
			{:else}
				<div class="absolute top-1/2 transform -translate-y-1/2 right-0 left-0">
					<LoadAnimation />
				</div>
			{/if}
		</ul>
	</div>
</IntersectionObserver>

{#if showRiege}
	<RiegeModal
		on:click_outside={showModal}
		on:close={handleClose}
		name={$riegen[currentRiege].name}
		trainingszeiten={$riegen[currentRiege].trainingszeiten}
		age={$riegen[currentRiege].age}
		description={$riegen[currentRiege].description}
		personen={$riegen[currentRiege].person}
		images={$riegen[currentRiege].imageRiege}
	/>
{/if}

<script>
	const riegen1day = [
		{
			name: 'Frauenriege',
			time1: '20:00 - 21:30 Uhr',
			day1: 'Mittwoch',
			badgename: 'Frauenriege'
		},
		{
			name: 'Kinderturnen KiTu',
			time1: '16:45 - 17:55 Uhr',
			day1: 'Mittwoch',
			badgename: 'KiTu'
		},
		{
			name: 'Jugendriege Klein',
			time1: '18:00 - 19:00 Uhr',
			day1: 'Mittwoch',
			badgename: 'Jugi Klein'
		},
		{
			name: 'Jugendriege Gross',
			time1: '19:00 - 20:00 Uhr',
			day1: 'Mittwoch',
			badgename: 'Jugi Gross'
		},
		{
			name: 'Männerriege',
			time1: '20:15 - 22:00 Uhr',
			day1: 'Donnerstag',
			badgename: 'Männerriege'
		},
		{
			name: 'Eltern-Kind ElKi',
			time1: '09:15 - 10:15 Uhr',
			day1: 'Donnerstag',
			badgename: 'ElKi'
		}
	];

	export const riegen2day = [
		{
			name: 'Aktive',
			time1: '19:30 - 21:15 Uhr',
			day1: 'Montag',
			time2: '20:15 - 22:00 Uhr',
			day2: 'Freitag'
		}
	];
</script>

<div class="grid md:grid-cols-3 sm:grid-cols-2 gap-x-2 gap-y-4">
	{#each riegen1day as riege}
		<div class="col-box-1 overflow-scroll">
			<a href="/riegen">
				<div class="lg:p-5 md:pd-4 p-2 relative">
					<h4 class="h4">{riege.name}</h4>
					<div>{riege.day1}</div>
					<div>{riege.time1}</div>
					<div class="absolute bottom-1/2 right-5">
						<svg
							class="lg:h-5 h-4"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
							/>
						</svg>
					</div>
				</div>
			</a>
		</div>
	{/each}

	{#each riegen2day as riege}
		<div class="col-box-1 overflow-scroll">
			<a href="/riegen">
				<div class="lg:p-5 md:pd-4 p-2 relative">
					<h4 class="h4">{riege.name}</h4>
					<div>{riege.day1}</div>
					<div>{riege.time1}</div>
					<div>{riege.day2}</div>
					<div>{riege.time2}</div>
					<div class="absolute bottom-1/2 right-5">
						<svg
							class="lg:h-5 h-4"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z"
							/>
						</svg>
					</div>
				</div>
			</a>
		</div>
	{/each}
</div>

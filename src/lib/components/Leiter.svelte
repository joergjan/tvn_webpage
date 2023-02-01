<script>
	const Leiter = [
		{
			name: 'Matthias Hebeisen',
			role: 'Kinderturnen KiTu',
			imageUrl: './images/people/avatar.jpeg',
			mail: 'mailto:christian.thurnheer@bluewin.ch',
			link: '/jugendriegen'
		},
		{
			name: 'Jan Jörg',
			role: 'Aktive',
			imageUrl: './images/people/avatar.jpeg',
			mail: 'mailto:jan.joerg.jj@gmail.com',
			link: '/erwachsene'
		},
		{
			name: 'Sabrina Akeret',
			role: 'Jugendriege Gross',
			imageUrl: './images/people/avatar.jpeg',
			mail: 'mailto:s.akeret@gmx.ch',
			link: '/jugendriegen'
		},
		{
			name: 'Carina Notz',
			role: 'Jugendriege Klein',
			imageUrl: './images/people/avatar.jpeg',
			mail: 'mailto:iren.akeret.95@hotmail.com',
			link: '/jugendriegen'
		},
		{
			name: 'Karin Brauchli',
			role: 'Kinderturnen KiTu',
			imageUrl: './images/people/avatar.jpeg',
			mail: 'mailto:iren.akeret.95@hotmail.com',
			link: '/jugendriegen'
		},
		{
			name: 'Martin Bösch',
			role: 'Jugendriege Klein',
			imageUrl: './images/people/avatar.jpeg',
			mail: 'mailto:iren.akeret.95@hotmail.com',
			link: '/jugendriegen'
		}
	];
</script>

<ul class="sm:grid sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
	{#each Leiter as person}
		<li>
			<div class="">
				<img class="rounded-lg shadow-xl" src={person.imageUrl} alt={person.name} />

				<div class="pt-2 pb-1">{person.name}</div>
				<a
					href="/riegen"
					class="bg-tvbluelight text-white text-sm px-2 py-1 rounded-lg hover:opacity-80"
				>
					{person.role}
				</a>

				<div class="pt-2">
					<a href={person.mail}>
						<button
							class="inline-flex items-center rounded-md border border-gray-300 px-2 py-1 text-sm font-medium  shadow-sm hover:bg-gray-100"
						>
							Mail
							<svg
								class="h-4 pl-2"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
							>
								<path
									d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z"
								/>
								<path
									d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z"
								/>
							</svg>
						</button>
					</a>
				</div>
			</div>
		</li>
	{/each}
</ul>

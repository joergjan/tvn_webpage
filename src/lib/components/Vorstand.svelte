<script>
	const Vorstand = [
		{
			name: 'Christian Thurnheer',
			role: 'Präsident',
			imageUrl: './images/people/avatar.jpeg',
			mail: 'mailto:christian.thurnheer@bluewin.ch'
		},
		{
			name: 'Jan Jörg',
			role: 'Oberturner',
			imageUrl: './images/people/avatar.jpeg',
			mail: 'mailto:jan.joerg.jj@gmail.com'
		},
		{
			name: 'Sandro Akeret',
			role: 'Kassier',
			imageUrl: './images/people/avatar.jpeg',
			mail: 'mailto:s.akeret@gmx.ch'
		},
		{
			name: 'Iren Akeret',
			role: 'Vize-Präsidentin',
			imageUrl: './images/people/avatar.jpeg',
			mail: 'mailto:iren.akeret.95@hotmail.com'
		},
		{
			name: 'Sabrina Sager',
			role: 'Aktuarin',
			imageUrl: './images/people/avatar.jpeg',
			mail: 'mailto:sabrina.rueg@bluewin.ch'
		}
	];
</script>

<ul class="sm:grid sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
	{#each Vorstand as person}
		<li>
			<div class="py-4">
				<img class="rounded-lg shadow-xl" src={person.imageUrl} alt={person.name} />
			</div>

			<div class="h5 text-semibold">{person.name}</div>
			<div class="text-sm text-gray-600 font-semibold">{person.role}</div>

			<div class="pt-2">
				<a href={person.mail}>
					<button class="px-2 py-1 text-sm button-gray">
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
		</li>
	{/each}
</ul>

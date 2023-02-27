<script>
	const Jahresprogramme = [
		{
			name: 'Jahresprogramm Aktive',
			path: './files/?'
		},
		{
			name: 'Jahresprogramm Jugendriegen',
			path: './files/?'
		}
	];

	const Statuten = [
		{
			name: 'Statuten',
			path: './files/?'
		}
	];

	const Reglemente = [
		{
			name: 'Organisationsreglement',
			path: './files/?'
		},
		{
			name: 'Reglement Jugendriegen',
			path: './files/?'
		},
		{
			name: 'Entschädigungsreglement',
			path: './files/?'
		}
	];
</script>

<title>TVN | Downloads</title>

<h1 class="h1">Downloads</h1>

<div>
	<div class="h2">Jahresprogramme</div>
	<div class="py-4">
		{#each Jahresprogramme as item}
			<div class="items-center flex-wrap">
				<table>
					<tbody>
						<tr>
							<td>
								<svg
									class="h-4 w-4"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
									/>
								</svg>
							</td>
							<th>
								<a href={item.path} class="link ml-4" target="_blank" rel="noreferrer">
									{item.name}
								</a>
							</th>
						</tr>
					</tbody>
				</table>
			</div>
		{/each}
	</div>
</div>

<div class="divider-line" />

<div>
	<div class="h2">Statuten</div>
	<div class="py-4">
		{#each Statuten as item}
			<div class="items-center flex-wrap">
				<table>
					<tbody>
						<tr>
							<td>
								<svg
									class="h-4 w-4"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
									/>
								</svg>
							</td>
							<th>
								<a href={item.path} class="link ml-4" target="_blank" rel="noreferrer">
									{item.name}
								</a>
							</th>
						</tr>
					</tbody>
				</table>
			</div>
		{/each}
	</div>
</div>

<div class="divider-line" />

<div>
	<div class="h2">Reglemente</div>
	<div class="py-4">
		{#each Reglemente as item}
			<div class="items-center flex-wrap">
				<table>
					<tbody>
						<tr>
							<td>
								<svg
									class="h-4 w-4"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke-width="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
									/>
								</svg>
							</td>
							<th>
								<a href={item.path} class="link ml-4" target="_blank" rel="noreferrer">
									{item.name}
								</a>
							</th>
						</tr>
					</tbody>
				</table>
			</div>
		{/each}
	</div>
</div>

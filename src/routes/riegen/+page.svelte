<script>
	const riegen = [
		{
			riege: 'Aktive',
			age: 'ab 16 Jahren',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',

			imageUrl: '/pictures/riegen/aktive.png',
			leiter: {
				name: 'Jan Jörg',
				imageUrl: '/pictures/people/avatar.jpeg'
			}
		},
		{
			riege: 'Frauenriege',
			age: 'nach eigenem Ermessen',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',

			imageUrl: '/pictures/riegen/frauenriege.png',

			leiter: {
				name: 'Sabrina Akeret',
				imageUrl: '/pictures/people/avatar.jpeg'
			}
		},
		{
			riege: 'Männerriege',
			age: 'nach eigenem Ermessen',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',

			imageUrl: '/pictures/riegen/mannerriege.png',

			leiter: {
				name: 'Philipp Rot',
				imageUrl: '/pictures/people/avatar.jpeg'
			}
		},
		{
			riege: 'ElKi',
			age: 'ab 2 Jahren',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',

			imageUrl: '/pictures/riegen/elki.png',
			leiter: {
				name: 'Jan Jörg',
				imageUrl: '/pictures/people/joergjan.jpg'
			}
		},
		{
			riege: 'KiTu',
			age: 'ab Kindergarten',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',

			imageUrl: '/pictures/riegen/kitu.png',
			leiter: {
				name: 'Jan Jörg',
				imageUrl: '/pictures/people/joergjan.jpg'
			}
		},
		{
			riege: 'Kleine Jugi',
			age: 'ab 1. Klasse',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',

			imageUrl: '/pictures/riegen/kleineJugi.png',

			leiter: {
				name: 'Sabrina Akeret',
				imageUrl: '/pictures/people/avatar.jpeg'
			}
		},
		{
			riege: 'Grosse Jugi',
			age: 'ab 4. Klasse',
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',

			imageUrl: '/pictures/riegen/grosseJugi.png',

			leiter: {
				name: 'Philipp Rot',
				imageUrl: '/pictures/people/avatar.jpeg'
			}
		}
	];
</script>

<title>TVN | Riegen</title>

<div class="h1">Riegen</div>

<div>
	<div class="h1">Unsere Riegen</div>
	<div class="text-xl text-center  text-gray-500">
		Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa libero labore natus atque,
		ducimus sed.
	</div>

	<div class="mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
		{#each riegen as riege}
			<div class="flex flex-col overflow-hidden rounded-lg shadow-lg">
				<div class="flex-shrink-0">
					<img class="h-48 w-full object-cover" src={riege.imageUrl} alt={riege.riege} />
				</div>
				<div class="flex flex-1 flex-col justify-between  p-6">
					<div class="flex-1">
						<div class="text-sm font-medium text-tvbluelight">
							<div>{riege.age}</div>
						</div>

						<div class="text-xl font-semibold text-gray-900">
							{riege.riege}
						</div>
						<div class="mt-3 text-base text-gray-500">
							{riege.description}
						</div>
					</div>
					<div class="mt-6 flex items-center">
						<div class="flex-shrink-0">
							<div>
								<div class="sr-only">{riege.leiter.name}</div>
								<img
									class="h-10 w-10 rounded-full"
									src={riege.leiter.imageUrl}
									alt={riege.leiter.name}
								/>
							</div>
						</div>
						<div class="ml-3">
							<div class="text-sm font-medium text-gray-900">
								<div>{riege.leiter.name}</div>
							</div>
							<div class="flex space-x-1 text-sm text-gray-500" />
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

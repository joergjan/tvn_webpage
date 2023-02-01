<script>
	const quotes = [
		{
			quote: 'E bitzeli Spass derf au mal sii!',
			person: 'Christian Thurnheer',
			role: '- Präsident Turnverein Nussbaumen',
			href: '/pictures/people/avatar.jpeg'
		}
	];
</script>

<title>TV Nussbaumen</title>

<div class="flex justify-center overflow-hidden">
	<img
		class="z-10 py-24 scale-150 md:scale-100"
		src="./images/logos/turner_webpage.png"
		alt="turner"
	/>
</div>

{#each quotes as quote}
	<div class="md:grid lg:grid-cols-3 md:grid-cols-2">
		<div class="flex justify-center lg:-my-8">
			<img
				class="rounded-lg shadow-xl"
				src="./images/people/avatar.jpeg"
				alt="Zitat des Präsidenten"
			/>
		</div>
		<div class="mt-12 lg:col-span-2 lg:m-0 lg:pl-8">
			<div class="px-4 lg:px-0 lg:py-20">
				<blockquote>
					<div>
						<svg
							class="h-12 w-12 opacity-25"
							fill="currentColor"
							viewBox="0 0 32 32"
							aria-hidden="true"
						>
							<path
								d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"
							/>
						</svg>
						<p class="h3 mt-4">{quote.quote}</p>
					</div>
					<footer class="mt-6">
						<div class="">{quote.person}</div>
						<div class="">{quote.role}</div>
					</footer>
				</blockquote>
			</div>
		</div>
	</div>
{/each}

<div class="md:pt-10">
	<div class="mt-10 lg:grid lg:grid-cols-5 h-108 lg:h-96">
		<div class="lg:col-span-1 lg:col-start-1">
			<div class="font-semibold">Hier trainieren wir:</div>
			<div>Primarschule Nussbaumen</div>
			<div>Alte Dorfstrasse 11a</div>
			<div>8537 Nussbaumen</div>
		</div>

		<div class="lg:col-span-4 lg:col-start-2 h-96 mt-5 lg:mt-0 pb-0">
			<iframe
				title="location"
				class="flex shadow-xl"
				width="100%"
				height="100%"
				loading="lazy"
				src="https://www.google.com/maps/embed/v1/place?key=AIzaSyCqL-wkzG0GGKyEOAHyY4kky2zDbKz5u-Y&q=primarschule+nussbaumen+tg"
			/>
		</div>
	</div>
</div>

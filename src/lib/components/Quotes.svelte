<script>
	const quotes = [
		{
			quote: 'E bitzeli Spass derf au mal sii!',
			person: 'Christian Thurnheer',
			role: '- Präsident Turnverein Nussbaumen',
			href: './images/people/christian_square.jpg'
		}
	];
</script>

{#each quotes as quote}
	<div class="md:grid grid-cols-2 lg:grid-cols-3">
		<div class="flex justify-center">
			<img
				loading="lazy"
				width="500"
				height="500"
				class="shadow-sm rounded-full"
				src={quote.href}
				alt={quote.quote}
			/>
		</div>
		<div class="md:ml-12 sm:mt-12 flex justify-center md:justify-start">
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
				<div class="h3 mt-8">{quote.quote}</div>
				<div class="mt-6">
					<div class="">{quote.person}</div>
					<div class="">{quote.role}</div>
				</div>
			</div>
		</div>
	</div>
{/each}

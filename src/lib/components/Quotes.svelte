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

{#each quotes as quote}
	<div class="md:grid lg:grid-cols-3 md:grid-cols-2">
		<div class="flex justify-center lg:-my-8">
			<img
				class="rounded-lg shadow-lg"
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

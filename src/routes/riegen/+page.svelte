<script>
	import { Riegen } from '$lib/components/riegen';
</script>

<title>TVN | Riegen</title>

<div class="h1">Riegen</div>

<div class="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
	{#each Riegen as riege}
		<div class="flex flex-col rounded-b-lg shadow-lg">
			<img class="h-48 w-full rounded-t-lg object-cover" src={riege.imageUrl} alt={riege.name} />
			<div class="flex flex-1 flex-col p-6">
				<div class="flex-1">
					<div class="text-sm text-tvbluelight">
						{riege.age}
					</div>
					<div class="h4 py-1">
						{riege.name}
					</div>
					<div class="mt-1 text-gray-500">
						{riege.description}
					</div>
				</div>
				<div class="mt-3 flex items-center">
					<div>
						<div class="sr-only">{riege.leiter.name}</div>
						<img
							class="h-10 w-10 rounded-full"
							src={riege.leiter.imageUrl}
							alt={riege.leiter.name}
						/>
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

<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import { urlFor } from '$lib/sanity/image';
	import RiegeContent from '$lib/components/riege/RiegeContent.svelte';

	export let riege: Riege;
</script>

<Dialog.Root>
	<Dialog.Trigger
		><h1>
			{riege.name}
		</h1>
		<p>
			{riege.age}
		</p>

		<div>
			{#each riege.kontaktLeiter as { fullname, mail, mainImage }}
				<p>{mail}</p>
				<p>{fullname}</p>
				{#if mainImage}
					<div class="relative aspect-video sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
						<img
							src={mainImage ? urlFor(mainImage).url() : '/favicon.png'}
							alt={fullname}
							class="${mainImage
								? ''
								: ' bg-gray-800 '} absolute inset-0 size-full rounded-lg bg-gray-50 object-cover"
						/>
					</div>
				{/if}
			{/each}
		</div>
	</Dialog.Trigger>
	<RiegeContent {riege} />
</Dialog.Root>

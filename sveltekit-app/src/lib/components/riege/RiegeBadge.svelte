<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import RiegeContent from '$lib/components/riege/RiegeContent.svelte';

	export let riege: Riege;
</script>

<Dialog.Root>
	<Dialog.Trigger class="bg-blue-500">
		<h1>
			{riege.name}
		</h1>
	</Dialog.Trigger>
	<RiegeContent {riege} />
</Dialog.Root>

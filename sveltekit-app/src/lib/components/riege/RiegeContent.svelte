<script lang="ts">
	import * as Dialog from '$lib/components/ui/dialog';
	import { urlFor } from '$lib/sanity/image';

	export let riege: Riege;
</script>

<Dialog.Content class="">
	<Dialog.Header>
		<Dialog.Title>{riege.name}</Dialog.Title>
		<Dialog.Description>
			{riege.body}
		</Dialog.Description>
	</Dialog.Header>
</Dialog.Content>

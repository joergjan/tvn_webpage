<script lang="ts">
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';
	import { galeries } from '$lib/scripts/stores';

	let getGaleries: HTMLFormElement;

	let galeryJson: string;

	onMount(async () => {
		if ($galeries.length <= 0) {
			galeryJson = await submitForm(getGaleries);
			$galeries = JSON.parse(galeryJson[1]).galeries;
		}
	});

	async function submitForm(form: HTMLFormElement) {
		const formData = new FormData(form);
		const response = await fetch(form.action, {
			method: 'POST',
			body: formData
		});

		const result = await response.json();

		const data = JSON.parse(result.data);

		console.log(data);

		return data;
	}
</script>

<form
	action="?/getGaleries"
	use:enhance
	method="POST"
	bind:this={getGaleries}
	on:submit|preventDefault={() => {}}
></form>

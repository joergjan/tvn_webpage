<script lang="ts">
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';
	import { riegen } from '$lib/scripts/stores';

	let getRiegen: HTMLFormElement;

	let riegenJson: string;

	onMount(async () => {
		if ($riegen.length <= 0) {
			riegenJson = await submitForm(getRiegen);
			$riegen = JSON.parse(riegenJson[1]).riegen;
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

		return data;
	}
</script>

<form
	action="?/getRiegen"
	use:enhance
	method="POST"
	bind:this={getRiegen}
	on:submit|preventDefault={() => {}}
></form>

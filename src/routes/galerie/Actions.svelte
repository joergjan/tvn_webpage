<script lang="ts">
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';
	import { imageFolder } from '$lib/scripts/stores';

	let getImageFolder: HTMLFormElement;

	let imageFolderJson: string;

	onMount(async () => {
		if ($imageFolder.length <= 0) {
			imageFolderJson = await submitForm(getImageFolder);
			$imageFolder = JSON.parse(imageFolderJson[1]).imageFolder;
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
	action="?/getImageFolder"
	use:enhance
	method="POST"
	bind:this={getImageFolder}
	on:submit|preventDefault={() => {}}
></form>

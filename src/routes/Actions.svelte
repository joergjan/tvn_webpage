<script lang="ts">
	import { onMount } from 'svelte';
	import { enhance } from '$app/forms';
	import { riegen, leiter, vorstand, roles } from '$lib/scripts/stores';

	let getLeiter: HTMLFormElement;
	let getVorstand: HTMLFormElement;
	let getRoles: HTMLFormElement;
	let getRiegen: HTMLFormElement;
	let leiterJson: string;
	let vorstandJson: string;
	let rolesJson: string;
	let riegenJson: string;

	onMount(async () => {
		if ($leiter.length <= 0) {
			leiterJson = await submitForm(getLeiter);
			$leiter = JSON.parse(leiterJson[1]).leiter;
		}

		if ($vorstand.length <= 0) {
			vorstandJson = await submitForm(getVorstand);
			$vorstand = JSON.parse(vorstandJson[1]).vorstand;
		}

		if ($roles.length <= 0) {
			rolesJson = await submitForm(getRoles);
			$roles = JSON.parse(rolesJson[1]).roles;
		}

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
<form
	action="?/getLeiter"
	use:enhance
	method="POST"
	bind:this={getLeiter}
	on:submit|preventDefault={() => {}}
></form>
<form
	action="?/getVorstand"
	use:enhance
	method="POST"
	bind:this={getVorstand}
	on:submit|preventDefault={() => {}}
></form>
<form
	action="?/getRoles"
	use:enhance
	method="POST"
	bind:this={getRoles}
	on:submit|preventDefault={() => {}}
></form>

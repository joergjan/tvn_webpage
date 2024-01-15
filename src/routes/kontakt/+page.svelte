<script lang="ts">
	import Kontakt from '$lib/components/Kontakt.svelte';
	import { onMount } from 'svelte';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';
	import { slide } from 'svelte/transition';
	import RiegeModal from '$lib/components/RiegeModal.svelte';
	import { leiter, riegen, vorstand, roles } from '$lib/scripts/stores';
	import LoadAnimation from '$lib/components/LoadAnimation.svelte';

	import Actions from './Actions.svelte';

	/**
	 * @type {typeof import("$lib/components/MapBoxComponent.svelte").default}
	 */
	let mapboxgl;
	let email = '';
	let emailValid = false;
	let leaveMessage = false;
	let messageAlreadySent = false;
	let error = false;
	let surname = '';
	let firstname = '';
	let message = '';
	let messageSent = false;

	let showRiege = false;
	let selectedRiege: Riege;

	$: fieldsFilled = emailValid && message != '' && surname != '' && firstname != '';

	onMount(async () => {
		mapboxgl = (await import('$lib/components/MapBoxComponent.svelte')).default;
		messageAlreadySent = sessionStorage.getItem('sendMail') == '1';
	});

	async function adjustHeight(event) {
		event.target.style.height = 'auto';
		event.target.style.height = event.target.scrollHeight + 15 + 'px';
	}

	async function checkEmail() {
		let emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
		if (!emailRegex.test(email)) {
			emailValid = false;
		} else {
			emailValid = true;
		}
	}

	async function toggleLeaveMessage() {
		if (leaveMessage) {
			leaveMessage = false;
		} else {
			leaveMessage = true;
		}
	}

	async function handleSubmit() {
		const formData = new FormData();
		formData.append('email', email);
		formData.append('surname', surname);
		formData.append('firstname', firstname);
		formData.append('message', message);

		const response = await fetch('?/sendMail', {
			method: 'POST',
			body: formData
		});

		console.log(response);
		let statusCode = response.status;
		console.log(statusCode);

		if (statusCode == 200) {
			console.log('Form submitted successfully');
			sessionStorage.setItem('sendMail', '1');
			messageAlreadySent = true;
			leaveMessage = false;
			messageSent = true;
			// Handle successful form submission
		} else {
			console.log('Form submission failed');
			error = true;
			messageSent = true;
			// Handle failed form submission
		}
	}

	async function showModal() {
		if (showRiege) {
			showRiege = false;
		} else {
			showRiege = true;
		}
	}

	async function handleClose() {
		showModal();
	}

	function handleOpen(event) {
		selectedRiege = $riegen.find((riege) => riege.id === event.detail);
		showModal();
	}
</script>

<svelte:head>
	<title>TVN | Kontakt</title>
	<meta
		name="description"
		content="Alle Vorstandsmitglieder und Leiter des TV Nussbaumen auf einen Blick"
	/>
</svelte:head>

<Actions />

<h1>Kontakt</h1>

{#if !messageAlreadySent && !leaveMessage}
	<button
		class="bg-tvbluelight hover:bg-tvblue text-white px-3 py-2 rounded-md mb-5"
		on:click={toggleLeaveMessage}
	>
		Nachricht hinterlassen
	</button>
{/if}

{#if (messageSent && !error) || messageAlreadySent}
	<div class="bg-tvbluelight text-white px-3 py-2 rounded-md mb-5">
		Danke für deine Nachricht. Wir werden uns so schnell wie möglich bei dir melden.
	</div>
{:else if messageSent && error}
	<div class="bg-red-500 text-white px-3 py-2 rounded-md mb-5">
		Es ist ein Fehler aufgetreten. Bitte versuche es später noch einmal.
	</div>
{/if}

{#if leaveMessage}
	<div class="flex mb-10" in:slide>
		<div class="">
			<form action="?/sendMail" method="POST" on:submit|preventDefault={handleSubmit}>
				<div class="">
					<div class="flex space-x-5">
						<div class="my-2">
							<label for="name">Vorname</label>
							<input
								class={firstname == '' ? 'bg-red-50 bg-opacity-90 ' : ''}
								type="text"
								name="name"
								bind:value={firstname}
							/>
						</div>
						<div class="my-2">
							<label for="name">Nachname</label>
							<input
								type="text"
								name="name"
								bind:value={surname}
								class={surname == '' ? 'bg-red-50 bg-opacity-90 ' : ''}
							/>
						</div>
					</div>
					<div class="my-2">
						<label for="email">Email</label>
						<input
							type="email"
							class={!emailValid ? 'bg-red-50 bg-opacity-90 ' : ''}
							placeholder="max.muster@tvnussbaumen.ch"
							bind:value={email}
							on:input={checkEmail}
							name="mail"
						/>
						{#if !emailValid}
							<p class="text-sm mt-1 text-red-500">Gib eine Gültige E-Mail Adresse ein.</p>
						{/if}
					</div>

					<div class="my-2">
						<label for="message">Text</label>
						<textarea
							class={message == '' ? 'bg-red-50 bg-opacity-90 ' : ''}
							name="message"
							on:input={adjustHeight}
							bind:value={message}
						/>
					</div>

					<div class="my-2">
						<button
							disabled={!fieldsFilled}
							type="submit"
							class={fieldsFilled
								? 'bg-tvbluelight hover:bg-tvblue text-white px-3 py-2 rounded-md'
								: 'bg-gray-500 px-3 py-2 rounded-md text-white'}
						>
							absenden
						</button>
					</div>
				</div>
			</form>
		</div>
	</div>
{/if}

<div>
	<div>
		<h2>Unser Vorstand</h2>
		<div>Der Vorstand leitet den Verein</div>
		<ul class="sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 relative min-h-72">
			{#if $vorstand.length > 0}
				{#each $vorstand as person}
					<IntersectionObserver animation="fade-in">
						<li>
							<Kontakt on:open={handleOpen} {person} />
						</li>
					</IntersectionObserver>
				{/each}
			{:else}
				<div class="absolute top-1/2 transform -translate-y-1/2 right-0 left-0">
					<LoadAnimation />
				</div>
			{/if}
		</ul>
	</div>
	<div>
		<h2 class="pt-10">Unsere Leiter</h2>
		<div>
			Die Leiter sind für den täglichen Turnbetrieb zuständig. Mit viel Herzblut organisieren sie
			Turnstunden, Ausflüge und vieles mehr.
		</div>

		<ul class="sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 relative min-h-72">
			{#if $vorstand.length > 0}
				{#each $leiter as person}
					<IntersectionObserver animation="fade-in">
						<li>
							<Kontakt on:open={handleOpen} {person} />
						</li>
					</IntersectionObserver>
				{/each}
			{:else}
				<div class="absolute top-1/2 transform -translate-y-1/2 right-0 left-0">
					<LoadAnimation />
				</div>
			{/if}
		</ul>

		<IntersectionObserver animation="fade-in">
			<div class="mt-10 lg:grid lg:grid-cols-5 max-h-auto">
				<div class="lg:col-span-1 lg:col-start-1">
					<div class="font-semibold">Turnverein Nussbaumen</div>
					<div>c/o Christian Thurnheer</div>
					<div>Altwingerten 1</div>
					<div>8537 Nussbaumen</div>
				</div>

				<div class="lg:col-span-4 lg:col-start-2 h-[500px] mt-5 lg:mt-0 pb-0">
					<svelte:component this={mapboxgl} coordinates={[8.825587388065486, 47.62381098583046]} />
				</div>
			</div>
		</IntersectionObserver>
	</div>
</div>

{#if showRiege}
	<RiegeModal
		on:click_outside={showModal}
		on:close={handleClose}
		name={selectedRiege.name}
		trainingszeiten={selectedRiege.trainingszeiten}
		age={selectedRiege.age}
		description={selectedRiege.description}
		personen={selectedRiege.person}
		images={selectedRiege.image}
	/>
{/if}

<style>
	input,
	textarea {
		@apply w-full;
	}
</style>

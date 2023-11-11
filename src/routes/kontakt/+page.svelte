<script>
	import Kontakt from '$lib/components/Kontakt.svelte';
	import { personen } from '$lib/scripts/personen';
	import { onMount } from 'svelte';
	import IntersectionObserver from '$lib/components/IntersectionObserver.svelte';
	import { fade, slide } from 'svelte/transition';

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

	$: fieldsFilled = emailValid && message != '' && surname != '' && firstname != '';

	onMount(async () => {
		mapboxgl = (await import('$lib/components/MapBoxComponent.svelte')).default;
		messageAlreadySent = sessionStorage.getItem('sendMail') == '1';
	});

	function adjustHeight(event) {
		event.target.style.height = 'auto';
		event.target.style.height = event.target.scrollHeight + 15 + 'px';
	}

	$: {
		let emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
		if (!emailRegex.test(email)) {
			emailValid = false;
		} else {
			emailValid = true;
		}
	}

	function toggleLeaveMessage() {
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
</script>

<svelte:head>
	<title>TVN | Kontakt</title>
	<meta
		name="description"
		content="Alle Vorstandsmitglieder und Leiter des TV Nussbaumen auf einen Blick"
	/>
</svelte:head>

<h1 class="h1">Kontakt</h1>

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
	<div class="flex mb-10" transition:slide>
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
		<div class="h2">Unser Vorstand</div>
		<div>Der Vorstand leitet den Verein</div>
		<ul class="sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 lg:grid-cols-4">
			{#each personen as person}
				{#if person.vorstand}
					<li>
						<Kontakt {person} />
					</li>
				{/if}
			{/each}
		</ul>
	</div>
	<div>
		<div class="h2 pt-10">Unsere Leiter</div>
		<div>
			Die Leiter sind für den täglichen Turnbetrieb zuständig. Mit viel Herzblut organisieren sie
			Turnstunden, Ausflüge und vieles mehr.
		</div>

		<div class="h3 mt-7 -mb-5">Riegenleiter</div>
		<ul class="sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 lg:grid-cols-4">
			{#each personen as person}
				{#if person.riegenleiter}
					<li>
						<Kontakt {person} />
					</li>
				{/if}
			{/each}
		</ul>
		<div class="h3 mt-7 -mb-5">Hilfsleiter</div>
		<ul class="sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-x-6 lg:grid-cols-4">
			{#each personen as person}
				{#if person.leiter && !person.riegenleiter}
					<li>
						<Kontakt {person} />
					</li>
				{/if}
			{/each}
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

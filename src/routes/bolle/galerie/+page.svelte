<script>
	import Aktive from '$lib/components/Aktive.svelte';

	let show = false;
	let password = 'tvn1919';
	let input = '';
	let passwordWrong = false;

	function checkPassword() {
		if (input == password) {
			show = true;
			if (typeof window !== 'undefined') {
				localStorage.setItem('boleGalery_correct', '1');
			}
		} else {
			alert('passwort falsch');
			passwordWrong = true;
			setTimeout(() => {
				passwordWrong = false;
			}, 5000);
		}
	}

	if (typeof window !== 'undefined') {
		if (localStorage.getItem('boleGalery_correct') === '1') {
			show = true;
		} else {
			show = false;
		}
	}
</script>

<h1 class="h1">Galerie</h1>
{#if show}
	<Aktive />
{:else}
	<div class="flex items-center justify-center">
		<div class="">
			<div class="h3">Diese Seite befindet sich in Überarbeitung</div>

			<div class="flex items-center justify-center text-lg bold pt-5">Vorschau anzeigen</div>

			<div class="flex items-center justify-center pt-3">
				<input
					placeholder="Passwort"
					class="px-2 py-1 flex items-center justify-center border border-gray-100"
					bind:value={input}
					type="text"
				/>
			</div>

			<div class="flex items-center justify-center">
				<button
					class="mt-3 px-2 py-1 button-gray"
					on:click={() => {
						checkPassword();
					}}>weiter</button
				>
			</div>
		</div>
	</div>
{/if}

{#if passwordWrong}
	<div class="absolute w-full h-full top-0 left-0 pt-3">
		<div
			class="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white py-5 px-10 rounded-lg z-10 text-xl text-red-500"
		>
			Passwort falsch
		</div>
		<div class="absolute top-0 left-0 w-full h-full bg-gray-700 opacity-50" />
	</div>
{/if}

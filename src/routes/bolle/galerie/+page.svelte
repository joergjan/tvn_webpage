<script>
	import { onMount } from 'svelte';

	let show = false;
	let password = 'tvn1919';
	let input = '';

	function checkPassword() {
		if (input == password) {
			show = true;
			if (typeof window !== 'undefined') {
				localStorage.setItem('boleGalery_correct', '1');
			}
		} else {
			alert('passwort falsch');
		}
	}

	onMount(() => {
		if (typeof window !== 'undefined') {
			if (localStorage.getItem('boleGalery_correct') === '1') {
				show = true;
			} else {
				show = false;
			}
		}
	});
</script>

<h2>Galerie</h2>
{#if show}
	<p>noch keine Fotos verfügbar</p>
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

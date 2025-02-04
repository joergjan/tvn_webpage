<script lang="ts">
	import { cubicIn } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	export let key: string;
	export let duration = 50;
</script>

{#key key}
	<div
		in:fade={{ delay: duration, duration, easing: cubicIn }}
		out:fade={{ duration, easing: cubicIn }}
	>
		<slot />
	</div>
{/key}

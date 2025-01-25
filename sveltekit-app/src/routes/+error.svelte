<script lang="ts">
	import { page } from '$app/state';
</script>

<div class="text-center">
	<h1>{page.error ? page.status : ''}</h1>

	<h1>{page.error ? page.error.message : 'Unbekannter Fehler. Versuche es erneut.'}</h1>
</div>

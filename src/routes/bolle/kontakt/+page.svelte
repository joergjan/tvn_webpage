<script>
	function submitForm() {
		fetch('/api/sendmail');
	}
</script>

<form on:submit|preventDefault={submitForm}>
	<button type="submit">Submit</button>
</form>

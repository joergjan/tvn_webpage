<script>
	function submitForm() {
		fetch('src/routes/api/sendmail');
	}
</script>

<form on:submit|preventDefault={submitForm}>
	<button type="submit">Submit</button>
</form>

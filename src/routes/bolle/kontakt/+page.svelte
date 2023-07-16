<script>
	let name = 'Max Muster';
	let email = 'max@muster.ch';
	let message = 'Ich möchte';

	async function handleSubmit() {
		try {
			const response = await fetch('/api/mail/sendmail', {
				method: 'POST',
				body: JSON.stringify({ name: name, email: email, message: message })
			});
			const data = await response.json();
			console.log(data);
		} catch (error) {
			console.error(error);
		}
	}
</script>

<form on:submit={handleSubmit}>
	<label for="name">Name:</label>
	<input type="text" bind:value={name} name="name" required />

	<label for="email">Email:</label>
	<input type="email" bind:value={email} name="email" required />

	<label for="message">Message:</label>
	<textarea bind:value={message} name="message" required />

	<button type="submit">Send</button>
</form>

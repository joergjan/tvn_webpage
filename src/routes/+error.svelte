<script>
	let count = 3;
	const countdown = setInterval(() => {
		count--;
		if (count === 0) {
			clearInterval(countdown);
			window.location.href = './';
		}
	}, 1000);
</script>

<title>TV Nussbaumen</title>

<div class="h1 flex place-content-center">Seite nicht gefunden :(</div>

<div class="h4 flex place-content-center pt-5">Du wirst weitergeleitet in</div>

<div class="h2 flex place-content-center pt-5">{count}</div>

<div class="flex justify-center">
	<img loading="lazy" class="h-96" src="../images/gif/runnerColor.gif" alt="athlete running gif" />
</div>

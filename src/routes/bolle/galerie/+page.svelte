<script>
	import Gallery from 'svelte-lightbox-gallery';

	const photos = [
		'/images/bolle/1.jpeg',
		'/images/bolle/bolle_voll.PNG',
		'/images/bolle/2.jpeg',
		'/images/bolle/3.jpeg',
		'/images/bolle/4.jpeg',
		'/images/bolle/5.jpeg',
		'/images/bolle/bolle_planung.jpg'
	];
</script>

<h2>Galerie</h2>

<Gallery {photos} />

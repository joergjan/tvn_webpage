<script>
	// @ts-nocheck
	import axios from 'axios';
	import Gallery from 'svelte-image-gallery';

	let flickrPhotoJsonAktive = [];
	let flickrPhotoJsonJugi = [];
	let flickrPhotoLinkAktive = [];
	let flickrPhotoLinkJugi = [];

	function getPhotosAktive() {
		axios
			.get(
				'https://api.flickr.com/services/rest?method=flickr.groups.pools.getPhotos&api_key=ebf8b5a8addf16333494732b8eef8e19&group_id=14819815@N20&format=json&nojsoncallback=true'
			)
			.then((response) => {
				flickrPhotoJsonAktive = response.data.photos.photo;
				for (var i = 0; i < flickrPhotoJsonAktive.length; i++) {
					flickrPhotoLinkAktive[i] =
						'https://live.staticflickr.com/' +
						flickrPhotoJsonAktive[i].server +
						'/' +
						flickrPhotoJsonAktive[i].id +
						'_' +
						flickrPhotoJsonAktive[i].secret +
						'_b.jpg';
				}
			});
	}

	getPhotosAktive();

	function getPhotosJugi() {
		axios
			.get(
				'https://api.flickr.com/services/rest?method=flickr.groups.pools.getPhotos&api_key=ebf8b5a8addf16333494732b8eef8e19&group_id=14849220@N23&format=json&nojsoncallback=true'
			)
			.then((response) => {
				flickrPhotoJsonJugi = response.data.photos.photo;
				for (var i = 0; i < flickrPhotoJsonJugi.length; i++) {
					flickrPhotoLinkJugi[i] =
						'https://live.staticflickr.com/' +
						flickrPhotoJsonJugi[i].server +
						'/' +
						flickrPhotoJsonJugi[i].id +
						'_' +
						flickrPhotoJsonJugi[i].secret +
						'_b.jpg';
				}
			});
	}

	getPhotosJugi();
</script>

<title>TVN | Galerie</title>

<div>
	<div class="h1">Galerie</div>

	<div class="h2">Erwachsene</div>

	<div class="container">
		<Gallery>
			{#each flickrPhotoLinkAktive as href}
				<img src={href} alt="" />
			{/each}
		</Gallery>
	</div>

	<div class="h2 pt-5">Jugendriegen</div>

	<div class="container">
		<Gallery>
			{#each flickrPhotoLinkJugi as href}
				<img src={href} alt="" />
			{/each}
		</Gallery>
	</div>
</div>

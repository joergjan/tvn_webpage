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
					flickrPhotoLinkAktive[i].largeURL =
						'https://live.staticflickr.com/' +
						flickrPhotoJsonAktive[i].server +
						'/' +
						flickrPhotoJsonAktive[i].id +
						'_' +
						flickrPhotoJsonAktive[i].secret +
						'_b.jpg';

					flickrPhotoLinkAktive[i].thumbnailURL =
						'https://live.staticflickr.com/' +
						flickrPhotoJsonAktive[i].server +
						'/' +
						flickrPhotoJsonAktive[i].id +
						'_' +
						flickrPhotoJsonAktive[i].secret +
						'_s.jpg';

					flickrPhotoJsonAktive[i].width = '100%';
					flickrPhotoJsonAktive[i].height = '100%';
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

	<Gallery>
		{#each flickrPhotoLinkAktive as image}
			<img src={image.largeURL} alt="" />
		{/each}
	</Gallery>

	<div class="h2 pt-5">Jugendriegen</div>

	<Gallery>
		{#each flickrPhotoLinkJugi as href}
			<img src={href} alt="" />
		{/each}
	</Gallery>
</div>

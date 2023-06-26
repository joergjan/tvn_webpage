<script lang="ts">
	import axios from 'axios';
	import Lightbox from './Lightbox.svelte';

	let flickrPhotoJsonJugi = [];

	const flickrPhotoLinkJugi: { href: string; no: number }[] = [];

	function getPhotosJugi() {
		axios
			.get(
				'https://api.flickr.com/services/rest?method=flickr.groups.pools.getPhotos&api_key=ebf8b5a8addf16333494732b8eef8e19&group_id=14849220@N23&format=json&nojsoncallback=true'
			)
			.then((response) => {
				flickrPhotoJsonJugi = response.data.photos.photo;
				for (var i = 0; i < flickrPhotoJsonJugi.length; i++) {
					flickrPhotoLinkJugi[i] = {
						href:
							'https://live.staticflickr.com/' +
							flickrPhotoJsonJugi[i].server +
							'/' +
							flickrPhotoJsonJugi[i].id +
							'_' +
							flickrPhotoJsonJugi[i].secret +
							'_b.jpg',
						no: i
					};
				}
			});
	}

	$: getPhotosJugi();
</script>

<div class="h2 pt-5">Jugendriegen</div>

<Lightbox photos={flickrPhotoLinkJugi} />

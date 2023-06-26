<script lang="ts">
	import axios from 'axios';
	import Galery from './Galery.svelte';
	
	let flickrPhotoJsonAktive = [];

	let flickrPhotoLinkAktive: { href: string; no: number }[] = [];

	function getPhotosAktive() {
		axios
			.get(
				'https://api.flickr.com/services/rest?method=flickr.groups.pools.getPhotos&api_key=ebf8b5a8addf16333494732b8eef8e19&group_id=14819815@N20&format=json&nojsoncallback=true'
			)
			.then((response) => {
				flickrPhotoJsonAktive = response.data.photos.photo;

				console.log(response);
				for (var i = 0; i < flickrPhotoJsonAktive.length; i++) {
					flickrPhotoLinkAktive[i] = {
						href:
							'https://live.staticflickr.com/' +
							flickrPhotoJsonAktive[i].server +
							'/' +
							flickrPhotoJsonAktive[i].id +
							'_' +
							flickrPhotoJsonAktive[i].secret +
							'_b.jpg',
						no: i
					};
				}
			});
	}

	$: getPhotosAktive();
</script>

<div class="h2">Erwachsene</div>

<Galery photos={flickrPhotoLinkAktive} />

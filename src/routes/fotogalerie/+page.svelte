<script>
	import axios from 'axios';

	let flickrPhotoJson = [];
	/**
	 * @type {any[]}
	 */
	let flickrPhotoLink = [];

	// use Flickr API to get all JSON Objects of Photos of a FLickr Group
	function getPhotos() {
		axios
			.get(
				'https://api.flickr.com/services/rest?method=flickr.groups.pools.getPhotos&api_key=ebf8b5a8addf16333494732b8eef8e19&group_id=14819815@N20&format=json&nojsoncallback=true'
			)
			.then((response) => {
				flickrPhotoJson = response.data.photos.photo;
				for (var i = 0; i < flickrPhotoJson.length; i++) {
					flickrPhotoLink[i] =
						'https://live.staticflickr.com/' +
						flickrPhotoJson[i].server +
						'/' +
						flickrPhotoJson[i].id +
						'_' +
						flickrPhotoJson[i].secret +
						'_b.jpg';
				}
			});
	}
	getPhotos();
</script>

<title>TVN | Fotogalerie</title>

<div>
	<div class="h1">Fotogalerie</div>

	<div class="container">
		{#each flickrPhotoLink as href}
			<img src={href} alt="" />
		{/each}
	</div>
</div>

<script lang="ts">
	import axios from 'axios';
	import Slide from './Slide.svelte';

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

	getPhotosJugi();
	let imageShowIndex = 0;
	$: console.log(imageShowIndex);

	function previousSlide() {
		if (imageShowIndex != 0) {
			imageShowIndex--;
		} else {
			imageShowIndex = flickrPhotoLinkJugi.length - 1;
		}
	}

	function nextSlide() {
		if (imageShowIndex != flickrPhotoLinkJugi.length - 1) {
			imageShowIndex++;
		} else {
			imageShowIndex = 0;
		}
	}
</script>

<div class="h2 pt-5">Jugendriegen</div>

<div class="relative">
	{#each flickrPhotoLinkJugi as { href, no }}
		<Slide
			imgUrl={href}
			slideNo={no}
			totalSlides={flickrPhotoLinkJugi.length}
			imageShowing={no == imageShowIndex}
		/>
	{/each}
	<button class="prevImg" on:click={previousSlide}>&#10094;</button>
	<button class="nextImg" on:click={nextSlide}>&#10095;</button>
</div>

<style>
	.row:after {
		content: '';
		display: table;
		clear: both;
	}

	/* Six columns side by side */
	.column {
		float: left;
		width: 16.66%;
	}

	/* Add a transparency effect for thumnbail images */
	.demo {
		opacity: 0.6;
	}

	.active,
	.demo:hover {
		opacity: 1;
	}
</style>

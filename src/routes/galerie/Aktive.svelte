<script lang="ts">
	import axios from 'axios';
	import Slide from './Slide.svelte';

	let flickrPhotoJsonAktive = [];

	const flickrPhotoLinkAktive: { href: string; no: number }[] = [];

	function getPhotosAktive() {
		axios
			.get(
				'https://api.flickr.com/services/rest?method=flickr.groups.pools.getPhotos&api_key=ebf8b5a8addf16333494732b8eef8e19&group_id=14819815@N20&format=json&nojsoncallback=true'
			)
			.then((response) => {
				flickrPhotoJsonAktive = response.data.photos.photo;
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

	getPhotosAktive();

	let imageShowIndex = 0;
	$: console.log(imageShowIndex);

	function previousSlide() {
		if (imageShowIndex != 0) {
			imageShowIndex--;
		} else {
			imageShowIndex = flickrPhotoLinkAktive.length - 1;
		}
	}

	function nextSlide() {
		if (imageShowIndex != flickrPhotoLinkAktive.length - 1) {
			imageShowIndex++;
		} else {
			imageShowIndex = 0;
		}
	}
</script>

<div class="h2">Erwachsene</div>

<div class="">
	<div class="relative max-w-2xl">
		{#each flickrPhotoLinkAktive as { href, no }}
			<Slide
				imgUrl={href}
				slideNo={no}
				totalSlides={flickrPhotoLinkAktive.length}
				imageShowing={no === imageShowIndex}
			/>
		{/each}

		<button class="prevImg" on:click={previousSlide}>&#10094;</button>
		<button class="nextImg" on:click={nextSlide}>&#10095;</button>
	</div>

	<div class="flex">
		{#each flickrPhotoLinkAktive as { href, no }}
			<div class="w-[16%]">
				<button
					on:click={() => {
						imageShowIndex = no;
					}}
					class="opacity-30"
					class:thumbnailImage={no === imageShowIndex}
				>
					<img src={href} alt="The Woods" />
				</button>
			</div>
		{/each}
	</div>
</div>

<script>
	import { Carousel } from 'flowbite-svelte';

	let images = [
		{ imgurl: 'https://live.staticflickr.com/65535/52581644661_4701f68e20_c.jpg' },
		{ imgurl: 'https://live.staticflickr.com/65535/52579943798_bc811955de_c.jpg' }
	];

	let showThumbs = false;
	let showCaptions = false;
</script>

<title>TV Nussbaumen</title>

<div class="flex justify-center overflow-hidden">
	<img
		class="z-10 py-24 scale-150 md:scale-100"
		src="./images/logos/turner_webpage.png"
		alt="turner"
	/>
</div>

<div class="">
	<Carousel
		divClass="overflow-hidden relative h-90 rounded-lg"
		{images}
		{showThumbs}
		{showCaptions}
	/>
</div>

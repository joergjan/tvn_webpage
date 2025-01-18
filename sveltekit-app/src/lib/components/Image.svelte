<script lang="ts">
	import { urlFor } from '$lib/sanity/image';

	export let image: Image;
	export let imageClass = '';
</script>

<img
	class="${image.mainImage ? '' : ' bg-gray-800 '} rounded-lg ${imageClass}"
	src={image.mainImage ? urlFor(image.mainImage).url() : ''}
	alt={image.title}
/>

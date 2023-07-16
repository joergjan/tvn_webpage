<script>
	console.warn = function () {};
	console.error = function () {};
	import { setContext } from 'svelte';
	import mapboxgl from 'mapbox-gl';
	import { PUBLIC_MAPBOX_KEY } from '$env/static/public';
	
	export let coordinates = [8.826432624745422, 47.62552494795642];

	mapboxgl.accessToken = PUBLIC_MAPBOX_KEY;

	setContext(PUBLIC_MAPBOX_KEY, {
		getMap: () => map
	});

	/**
	 * @type {any}
	 */
	let map;

	/**
	 * @param {HTMLDivElement} container
	 */
	function initMap(container) {
		map = new mapboxgl.Map({
			container: 'container',
			style: 'mapbox://styles/joergjan/cljq4p91t00yv01o43zziaq0r',
			center: coordinates,
			zoom: 17,
			pitch: 60 // pitch in degrees
		});

		const marker = new mapboxgl.Marker({ color: '#375398' }).setLngLat(coordinates).addTo(map);
		map.doubleClickZoom.enable();
		map.touchZoomRotate.enable({ around: 'center' });
	}
</script>

<head>
	<link href="https://api.mapbox.com/mapbox-gl-js/v2.6.1/mapbox-gl.css" rel="stylesheet" />
</head>

<div class="h-full rounded-md shadow-md" id="container" use:initMap />

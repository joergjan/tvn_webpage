import mapboxgl from 'mapbox-gl';
// https://docs.mapbox.com/help/glossary/access-token/
mapboxgl.accessToken =
	'pk.eyJ1Ijoiam9lcmdqYW4iLCJhIjoiY2xqcGhqajNrMjI0MzNkbnVtNGh5dDBvdiJ9.HJ5J6ZUYhBUgmVeHYlIxfA';

const key = Symbol();

export { mapboxgl, key };

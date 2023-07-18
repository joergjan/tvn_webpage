// this script should be included in .gitignore
// the problem is that files in .gitignore cannot be accessed by vercel, so i need another solution to hide my api key

// this api key is not included in .env, because for performance reasons it makes sense to
// load the mapbox component onMount(). Therefore environment variables cannot be accessed

export const MAPBOX_KEY =
	'pk.eyJ1Ijoiam9lcmdqYW4iLCJhIjoiY2xqcGhqajNrMjI0MzNkbnVtNGh5dDBvdiJ9.HJ5J6ZUYhBUgmVeHYlIxfA';

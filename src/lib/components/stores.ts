import { writable } from 'svelte/store';

export let currentPage = writable(0);

export let lightboxActive = writable(0);

export let selectedAgeID = writable(2);

export let selectedRiegeID = writable(0);


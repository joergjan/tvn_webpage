import { writable, derived } from 'svelte/store';

export let currentPage = writable(0);

export let currentBollePage = writable(0);

export let lightboxActive = writable(0);

export let riegen = writable([]);

export let posts = writable([]);

export let leiter = writable([]);

export let vorstand = writable([]);

export let galeries = writable([]);

export let roles = writable([]);

export let darkMode = writable();

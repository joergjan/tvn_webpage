<script>
	import { onMount } from 'svelte';
	import { posts } from '$lib/scripts/stores';

	onMount(async () => {
		if ($posts.length == 0) {
			try {
				const response = await fetch('/api/v1/main/getPosts');
				const data = await response.json();

				$posts = data.posts;
			} catch (error) {
				console.error('Error:', error);
			}
		}
	});
</script>

<h1>Beiträge</h1>

<ul class="grid grid-cols-3">
	{#each $posts as post}
		<li class="rounded-lg shadow-lg group">
			<img class="rounded-t-lg" src={post.image.url} alt="" />
			<div class="p-2 text-center">
				<h4>
					{post.title}
				</h4>
				<p>
					{post.text}
				</p>
			</div>
		</li>
	{/each}
</ul>

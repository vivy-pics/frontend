<script lang="ts">
	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<svelte:head>
	<title>VIVY</title>
</svelte:head>

{#each data.posts as post}
	<article>
		<a href="/posts/{post.number}">
			<img src="https://cdn.vivy.pics/{post.hash}" alt="Post #{post.number}'s image" />
		</a>
	</article>
{/each}

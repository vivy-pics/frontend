<script lang="ts">
	import { PUBLIC_CDN_URL } from "$env/static/public";

	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<svelte:head>
	<title>VIVY</title>
</svelte:head>

{#each data.posts as post}
	<article>
		<a href="/posts/{post.number}">
			<img src="{PUBLIC_CDN_URL}/{post.hash}" alt="Post #{post.number}'s image" />
		</a>
	</article>
{/each}

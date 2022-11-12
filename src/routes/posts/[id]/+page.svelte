<script lang="ts">
	import { PUBLIC_CDN_URL } from "$env/static/public";

	import type { PageData } from "./$types";

	export let data: PageData;
</script>

<svelte:head>
	<title>#{data.number} - VIVY</title>
	<meta property="og:image" content="{PUBLIC_CDN_URL}/{data.hash}" />
	<meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<pre><code>{JSON.stringify(data, null, 4)}</code></pre>

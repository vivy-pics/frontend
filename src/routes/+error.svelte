<script lang="ts">
	import { page } from "$app/stores";

	const error = $page.error!;
</script>

<svelte:head>
	<title>Uh oh - VIVY</title>
</svelte:head>

<h1>Uh oh!</h1>

{#if $page.route.id === "/"}
	<p>
		Something went wrong and the VIVY homepage is unavailable. This usually means VIVY is
		experiencing unexpected downtime. Please try again later.
	</p>
{:else}
	<p>
		Something went wrong, and it seems like we didn't quite catch it! Let's <a href="/">go home</a>,
		shall we?
	</p>
{/if}

<aside>
	<details>
		<summary>Guru Meditation</summary>
		<pre><code
				>HTTP {$page.status}
{JSON.stringify(error, null, 4)}</code
			></pre>
	</details>
</aside>

<style>
	aside {
		color: var(--ctp-mocha-overlay1);
	}

	@media (prefers-color-scheme: light) {
		aside {
			color: var(--ctp-latte-overlay1);
		}
	}

	summary {
		cursor: pointer;
	}
</style>

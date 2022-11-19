<script lang="ts">
	import "../app.css";

	import { PUBLIC_API_URL } from "$env/static/public";
	import { onMount } from "svelte";

	let backendVersion: string | null = null;

	onMount(async () => {
		try {
			backendVersion = (await fetch(`${PUBLIC_API_URL}/version`).then((res) => res.json())).version;
		} catch {
			/* ignored */
		}
	});
</script>

<div id="content">
	<aside id="columnLeft"><slot name="columnLeft" /></aside>
	<div id="mainContent">
		<header>
			<nav><a href="/"><img src="/logo.svg" alt="VIVY logo" height="30" /></a></nav>
		</header>
		<main><slot /></main>
	</div>
	<aside id="columnRight"><slot name="columnRight" /></aside>
</div>

<footer>
	<div id="version">
		<span
			>Frontend: <a href="https://github.com/vivy-pics/frontend/tree/%VERSION%">%VERSION%</a></span
		>
		<span>
			Backend:
			{#if !backendVersion}
				...
			{:else}
				<a href="https://github.com/vivy-pics/backend/tree/{backendVersion}">{backendVersion}</a>
			{/if}
		</span>
	</div>
</footer>

<style>
	:global(body) {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	#content {
		flex-grow: 1;
		flex-shrink: 0;
		flex-basis: auto;

		display: flex;
		margin: 16px;
	}

	#columnLeft {
		flex: 20%;
	}

	#columnRight {
		flex: 20%;
	}

	#mainContent {
		flex: 60%;
	}

	footer {
		background: var(--crust);

		padding: 16px;

		flex-grow: 0;
		flex-shrink: 0;
		flex-basis: auto;
	}

	#version {
		opacity: 0.7;
	}
</style>

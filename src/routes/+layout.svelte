<script lang="ts">
	import "../app.css";

	import { PUBLIC_API_URL } from "$env/static/public";
	import type { PageData } from "./$types";

	import { onMount } from "svelte";
	import { userInfo } from "../stores";

	export let data: PageData;

	$userInfo = data.userInfo;

	async function login() {
		await fetch(`${PUBLIC_API_URL}/users/login`, {
			method: 'POST',
			body: JSON.stringify({
				email: "vivy@lewisakura.moe",
				password: "abc"
			}),
			headers: {
				"Content-Type": "application/json"
			}
		});
	}
</script>

<div id="content">
	<aside id="columnLeft"><slot name="columnLeft" /></aside>
	<div id="mainContent">
		<header>
			<nav>
				<a href="/"><img src="/logo.svg" alt="VIVY logo" height="30" /></a>
				{#if $userInfo.number}
					{$userInfo.username}
				{:else}
					<button on:click={login}>funny button</button>
				{/if}
			</nav>
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
			{#if !data.backendVersion}
				...
			{:else}
				<a href="https://github.com/vivy-pics/backend/tree/{data.backendVersion}"
					>{data.backendVersion}</a
				>
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

	nav > a > img {
		vertical-align: middle;
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

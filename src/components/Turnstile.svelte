<script lang="ts">
	import { browser } from "$app/environment";
	import { PUBLIC_TURNSTILE_SITE_KEY } from "$env/static/public";
	import { onMount } from "svelte";

	let container: HTMLDivElement;

	export let verifyCallback: (token: string) => void;
	export let expiredCallback: () => void = () => {};
	export let action: string;
	export let data: string | undefined = undefined;

	if (browser) {
		// @ts-ignore
		window.turnstileLoadCallback = () => {
			// @ts-ignore
			window.turnstile.render(container, {
				sitekey: PUBLIC_TURNSTILE_SITE_KEY,
				theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
				callback: verifyCallback,
				"timeout-callback": expiredCallback,
				action,
				cData: data
			});
		};
	}

	onMount(() => {
		// @ts-ignore
		if (window.turnstile) {
			// @ts-ignore
			window.turnstileLoadCallback();
		} else {
			const script = document.createElement("script");
			script.src =
				"https://challenges.cloudflare.com/turnstile/v0/api.js?onload=turnstileLoadCallback&render=explicit";
			script.async = true;
			script.defer = true;
			document.body.appendChild(script);
		}
	});
</script>

<div bind:this={container} />

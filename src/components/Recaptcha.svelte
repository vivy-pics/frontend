<script lang="ts">
	import { browser } from "$app/environment";
	import { onMount } from "svelte";

	let container: HTMLDivElement;

	export let siteKey: string;
	export let verifyCallback: (token: string) => void;
	export let expiredCallback: () => void = () => {};

	if (browser) {
		// @ts-ignore
		window.grecaptchaLoadCallback = () => {
			// @ts-ignore
			window.grecaptcha.render(container, {
				sitekey: siteKey,
				theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
				callback: verifyCallback,
				expiredCallback
			});
		};
	}

	onMount(() => {
		// @ts-ignore
		if (window.grecaptcha) {
			// @ts-ignore
			window.grecaptchaLoadCallback();
		} else {
			const script = document.createElement("script");
			script.src =
				"https://www.google.com/recaptcha/api.js?onload=grecaptchaLoadCallback&render=explicit";
			script.async = true;
			script.defer = true;
			document.body.appendChild(script);
		}
	});
</script>

<div bind:this={container} />

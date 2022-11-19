<script lang="ts">
	import { PUBLIC_API_URL, PUBLIC_RECAPTCHA_SITE_KEY } from "$env/static/public";
	import { page } from "$app/stores";
	import Recaptcha from "../../../components/Recaptcha.svelte";
	import { goto } from "$app/navigation";

	const { params } = $page;

	async function verifyCallback(token: string) {
		const response = await fetch(`${PUBLIC_API_URL}/users/verify`, {
			method: "POST",
			body: JSON.stringify({
				token: params.token,
				recaptcha: token
			}),
			headers: {
				"Content-Type": "application/json"
			}
		});

		if (!response.ok) {
			const data = await response.json();
			return await goto("/verify?message=" + encodeURIComponent(data.error));
		}

		await goto("/");
	}
</script>

<h1>E-Mail Verification</h1>
<p>Please verify that you are not a robot by completing the following captcha:</p>
<Recaptcha siteKey={PUBLIC_RECAPTCHA_SITE_KEY} {verifyCallback} />

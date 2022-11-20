<script lang="ts">
	import { PUBLIC_API_URL } from "$env/static/public";
	import { page } from "$app/stores";
	import Turnstile from "../../../components/Turnstile.svelte";
	import { goto } from "$app/navigation";

	const { params } = $page;

	async function verifyCallback(token: string) {
		const response = await fetch(`${PUBLIC_API_URL}/users/verify`, {
			method: "POST",
			body: JSON.stringify({
				token: params.token,
				turnstile: token
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
<Turnstile {verifyCallback} action="email-verification" data={params.token} />

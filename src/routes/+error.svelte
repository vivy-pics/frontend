<script lang="ts">
    import { page } from "$app/stores";

    const error = $page.error!;
</script>

<svelte:head>
    <title>Uh oh - VIVY</title>
</svelte:head>

<h1>Uh oh!</h1>
<p>Something went wrong! Let's <a href="/">go home</a>, shall we?</p>

<aside>
    <details>
        <summary>Guru Meditation</summary>
        <pre><code>HTTP {$page.status}: {error.message}
{JSON.stringify(error, null, 4)}</code></pre>
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
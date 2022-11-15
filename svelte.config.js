import fs from "node:fs";

import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";

const version = (() => {
	const ref = fs.readFileSync(".git/HEAD", "utf8").trim();
	if (!ref.includes(":")) {
		return ref.slice(0, 7);
	}

	return fs
		.readFileSync(`.git/${ref.slice(5)}`, "utf8")
		.trim()
		.slice(0, 7);
})();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		replace: [[/%VERSION%/g, version]]
	}),

	kit: {
		adapter: adapter()
	}
};

export default config;

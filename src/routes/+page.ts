import { PUBLIC_API_URL } from "$env/static/public";

import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
	const data = await fetch(`${PUBLIC_API_URL}/posts/new`).then((r) => r.json());

	return {
		posts: data as { number: number; hash: string; posted_at: Date; likes: number }[]
	};
};

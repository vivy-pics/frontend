import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
	const data = await fetch("https://api.vivy.pics/posts/new").then((r) => r.json());

	return {
		posts: data as { number: number; hash: string; posted_at: Date; likes: number }[]
	};
};

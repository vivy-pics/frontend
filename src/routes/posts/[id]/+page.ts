import { PUBLIC_API_URL } from "$env/static/public";

import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch, params }) => {
	const data = await fetch(`${PUBLIC_API_URL}/posts/${params.id}`).then((r) => r.json());

	return data as {
		number: number;
		soft_deleted: boolean;
		hash: string;
		posted_at: string;
		likes: number;
		deleted_at?: string;
		deletion_reason?: string;
		owner: { number: number };
		variant_of?: { number: number };
	};
};

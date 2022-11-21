import { PUBLIC_API_URL } from "$env/static/public";

import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
	return {
		backendVersion: fetch(`${PUBLIC_API_URL}/version`)
			.then((res) => res.json())
			.then((data) => data.version)
			.catch(() => null),
		userInfo: fetch(`${PUBLIC_API_URL}/users/me`)
			.then((res) => res.json())
			.catch(() => ({}))
	};
};

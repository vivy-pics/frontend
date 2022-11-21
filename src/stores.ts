import { writable } from "svelte/store";

export const userInfo = writable<
	Partial<{ username: string; number: number; posts: { number: number }[] }>
>({});

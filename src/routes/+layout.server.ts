import { createClient } from '$lib/prismicio';

export const prerender = 'auto';

export async function load({ fetch, cookies }) {
	const client = createClient({ fetch, cookies });

	const navbar = await client.getSingle('navbar');

	return {
		navbar
	};
}

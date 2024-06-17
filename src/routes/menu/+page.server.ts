import { error } from '@sveltejs/kit';

import { createClient } from '$lib/prismicio';

export async function load({ fetch, cookies }) {
	const client = createClient({ fetch, cookies });
	const category = await client.getAllByType('category');
	const foodproducts = await client.getAllByType('foodproducts');

	if (category && foodproducts) {
		console.log(category);
		console.log(foodproducts);
		return { category, foodproducts };
	}

	error(404, 'Not found');
}

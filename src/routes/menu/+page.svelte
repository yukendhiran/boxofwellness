<script>
	export let data;
	import Bounded from '$lib/components/Bounded.svelte';
	/** @type {import("@prismicio/client").Content.FoodproductsDocument} */
	import { PrismicImage } from '@prismicio/svelte';
	let selectedCategory = null;

	function handleCategoryClick(category) {
		selectedCategory = category;
	}
</script>

<div class="flex w-full justify-center">
	<section class="mx-auto flex flex-col justify-center rounded-md p-4">
		{#if data.category}
			<div class="glass-container opacity-1 mt-16 md:w-fit">
				<h1 class="p-2 text-center text-3xl md:p-10">Categories</h1>
				<hr />
				<div class="mb-5 mt-2 mt-5 grid grid-cols-2 gap-4 md:grid-cols-6 md:gap-6">
					{#each data.category as category}
						<button
							class="relative inline-flex h-full w-full rounded-lg border border-green-100/20 bg-green-200/10 px-4 py-2 text-green-200 outline-none ring-green-300 hover:border-green-200/40 hover:text-green-300 after:hover:bg-opacity-15 focus:ring-2"
							on:click={() => handleCategoryClick(category)}
						>
							{category.data.name}
						</button>
					{/each}
				</div>
			</div>
		{:else}
			<p>No categories found.</p>
		{/if}
	</section>
</div>

{#if selectedCategory}
	<h2 class="p-2 text-center text-3xl md:mx-8">{selectedCategory.data.name}</h2>
	<p class=" p-2 text-center text-lg md:mx-8">{selectedCategory.data.description}</p>

	<div class="grid grid-cols-1 md:grid-cols-4">
		{#each data.foodproducts as foods}
			{#if foods.data.category === selectedCategory.data.category_id}
				<section class="mx-10 h-3/4 w-3/4 p-2 p-4 text-lg shadow-md">
					<div class="">
						<PrismicImage field={foods.data.image} class="mb-4 w-fit rounded-md" />
						<h3 class="mb-2 text-xl font-semibold">{foods.data.name}</h3>
						<p class="mb-4 text-sm">{foods.data.description}</p>
						<p class="rounded-lg bg-green-400/50 text-center">Price: &#8377; {foods.data.price}</p>
					</div>
				</section>
			{/if}
		{/each}
	</div>
{/if}

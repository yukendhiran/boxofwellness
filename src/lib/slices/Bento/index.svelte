<script lang="ts">
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicImage } from '@prismicio/svelte';

	export let slice: Content.BentoSlice;
</script>

<section data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<main class="container mx-auto hidden p-4 md:block">
		<a href="/menu">
			{#each slice.primary.bentoitem as item, i}
				<div class="flex items-center gap-4">
					{#if i % 2 === 0}
						<div class="w-1/2 p-10">
							<PrismicImage field={item.image} class=" w-full rounded-lg" />
						</div>
						<div class="w-1/2 p-10">
							<h2 class=" text-7xl font-bold">{item.title}</h2>
							<p class="mb-10 mt-4 text-justify leading-6">
								{item.description}
							</p>
							<a
								class="relative inline-flex h-full w-1/3 rounded-lg border border-green-100/20 bg-green-200/10 px-4 py-2 text-green-200 outline-none ring-green-300 hover:border-green-200/40 hover:text-green-300 after:hover:bg-opacity-15 focus:ring-2"
								href="/menu">{item.title}</a
							>
						</div>
					{:else}
						<div class="w-1/2">
							<h2 class="text-7xl font-bold">{item.title}</h2>
							<p class="mb-10 mt-4 text-justify leading-6">{item.description}</p>
							<a
								class="relative inline-flex h-full w-1/3 rounded-lg border border-green-100/20 bg-green-200/10 px-4 py-2 text-green-200 outline-none ring-green-300 hover:border-green-200/40 hover:text-green-300 after:hover:bg-opacity-15 focus:ring-2"
								href="/menu">{item.title}</a
							>
						</div>
						<div
							class=" opacity-1 absolute -z-10 h-2/3 w-2/3 bg-green-700/50 mix-blend-screen blur-3xl filter md:blur-[120px]"
						/>
						<div class="w-1/2">
							<PrismicImage field={item.image} class="w-full rounded-lg" />
						</div>
					{/if}
				</div>
			{/each}
		</a>
	</main>
	<main class="container mx-auto p-4 md:hidden">
		<a href="/menu">
			{#each slice.primary.bentoitem as item, i}
				<div class="p-4">
					<PrismicImage field={item.image} class="mt-4 w-full rounded-lg" />
					<h2 class="text-2xl font-bold">{item.title}</h2>
					<p class="mb-4 text-justify leading-6">{item.description}</p>
					<a
						class="relative inline-flex h-full w-full rounded-lg border border-green-100/20 bg-green-200/10 px-4 py-2 text-green-200 outline-none ring-green-300 hover:border-green-200/40 hover:text-green-300 after:hover:bg-opacity-15 focus:ring-2"
						href="/menu">{item.title}</a
					>
				</div>
			{/each}
		</a>
	</main>
</section>

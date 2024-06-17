<script lang="ts">
	import Bounded from '$lib/components/Bounded.svelte';
	import ButtonLink from '$lib/components/ButtonLink.svelte';
	import TriangleGrid from '$lib/components/TriangleGrid.svelte';
	import type { Content } from '@prismicio/client';
	import { PrismicImage, PrismicLink, PrismicRichText, PrismicText } from '@prismicio/svelte';

	export let slice: Content.HeroSlice;
</script>

<Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
	<div class="relative text-center">
		<TriangleGrid />
		{#if slice.primary.heading}
			<h1 class="opacity-1 mx-auto max-w-3xl text-balance text-5xl font-medium md:text-7xl">
				<PrismicText field={slice.primary.heading} />
			</h1>
		{/if}

		{#if slice.primary.body}
			<p class="hero__body opacity-1 mx-auto mt-6 max-w-md text-balance text-gray-300">
				<PrismicRichText field={slice.primary.body} />
			</p>
		{/if}

		{#if slice.primary.buttonlink}
			<ButtonLink class="mt-8" field={slice.primary.buttonlink}
				>{slice.primary.buttonlabel}</ButtonLink
			>
		{/if}

		{#if slice.primary.heroimage}
			<div class="glass-container opacity-1 mt-16 w-fit">
				<div
					class=" opacity-1 absolute left-1/3 top-0 -z-10 h-2/3 w-2/3 bg-green-700/50 mix-blend-screen blur-3xl filter md:blur-[120px]"
				/>
				<div
					class="opacity-1 absolute left-0 top-1/3 -z-10 h-2/3 w-2/3 bg-green-600/50 mix-blend-screen blur-3xl filter md:blur-[120px]"
				/>

				<PrismicImage class="rounded-lg" field={slice.primary.heroimage} />
			</div>
		{/if}
	</div>
</Bounded>

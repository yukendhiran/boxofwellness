<script>
	export let navbar;

	import { PrismicLink } from '@prismicio/svelte';
	/** @type {import("@prismicio/client").Content.NavbarDocument} */
	import PhInstagramLogo from '~icons/ph/instagram-logo';
	import PhFacebookLogo from '~icons/ph/facebook-logo';
	import PhWhatsappLogo from '~icons/ph/whatsapp-logo';
</script>

<footer
	class=" bottom-0 mt-5 w-full border-t border-gray-700 px-8 py-7 md:flex md:flex-row md:items-center md:justify-between md:gap-6"
>
	<span class="text-center md:text-left"
		>Box of <br /> Wellness <br />
		<a
			href="https://www.google.com/maps/place/11,+Pillayar+Koil+St,+Potheri,+Kattankulathur,+Tamil+Nadu+603203/@12.831277,80.045219,20z/data=!4m6!3m5!1s0x3a52f76c610f42d7:0x55d3ade9602794d7!8m2!3d12.8199406!4d80.037902!16s%2Fg%2F11t894z4bh?hl=en&entry=ttu"
			target="_blank"
			rel="noopener noreferrer"
		>
			06, Pillayar Kovil Street, Thailavaram, Chengalpattu
		</a> <br />
		<a href="tel:+916374759268">+91 6374759268</a> <br />
		<a href="mailto:boxofwellness.diet@gmail.com">boxofwellness.diet@gmail.com</a> <br />
	</span>
	<span class="text-center md:text-left"
		>Opening Hours: Monday - Saturday, 06AM - 10PM
		<br /><br />
		<div class="flex gap-2">
			<a href="https://www.instagram.com/box_of_wellness?igsh=MWp2b24yOGNxYmtyNQ=="
				><PhInstagramLogo class="h-8 w-8" /></a
			>
			<a href="https://www.facebook.com/profile.php?id=61556594750626&mibextid=JRoKGi"
				><PhFacebookLogo class="h-8 w-8" /></a
			>
			<a href="https://wa.me/916374759268"><PhWhatsappLogo class="h-8 w-8" /> </a>
		</div>
	</span>
</footer>

<script>
	import {
		elements,
		elementError,
		users,
		userError,
		events,
		eventError,
		areas,
		areaError
	} from '$lib/store';
	import { LoadingSplash } from '$comp';
</script>

<svelte:head>
	<title>BTC Map - About</title>
	<meta property="og:image" content="https://btcmap.org/images/og/home.png" />
	<meta property="twitter:title" content="BTC Map - About" />
	<meta property="twitter:image" content="https://btcmap.org/images/og/home.png" />
</svelte:head>

{#if ($elements && $elements.length && $users && $users.length && $events && $events.length && $areas && $areas.length) || $elementError || $userError || $eventError || $areaError}
	<slot />
{:else}
	<LoadingSplash page="about us" />
{/if}

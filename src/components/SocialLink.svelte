<script>
	export let url;
	export let social;

	import { Icon } from '$comp';
</script>

<a
	href={url}
	target="_blank"
	rel="noreferrer"
	class="inline-block rounded-full bg-link p-2 text-white transition-colors hover:bg-hover dark:bg-white/[0.15] dark:hover:bg-link"
>
	<Icon w="28" h="28" icon={social} type="socials" />
</a>

<script>
	export let image;
	export let text;
	export let desc;
	export let link;

	import { Icon } from '$comp';
</script>

<div>
	{#if link}
		<a
			href={link}
			target={text === 'Web' ? '_self' : '_blank'}
			rel="noreferrer"
			class="text-2xl font-semibold text-link transition-colors hover:text-hover"
		>
			<div
				class="mb-5 flex h-60 items-center justify-center rounded-2xl bg-offwhite dark:bg-white/[0.15]"
			>
				<Icon w="112" h="112" icon={image} type="apps" />
			</div>
			<p>{text}</p>
			<p class="text-xl font-normal">{desc}</p>
		</a>
	{:else}
		<div
			class="mb-5 flex h-60 items-center justify-center rounded-2xl bg-offwhite text-link opacity-50 dark:bg-white/[0.15]"
		>
			<i class="{image} h-28 w-28" />
		</div>
		<p class="text-2xl font-semibold text-link opacity-50">{text}</p>
		<p class="text-xl text-link opacity-50">Soon!</p>
	{/if}
</div>

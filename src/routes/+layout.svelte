<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import "../global.css";
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
	<link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500;700&display=swap" rel="stylesheet">
</svelte:head>

<style>
	:global(body) {
		background-color: #fff;
		color: #000;
		font-family: 'DM Mono', monospace;
	}
</style>

{@render children?.()}

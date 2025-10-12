<script lang="ts">
	import icon from '$lib/assets/logoE.png';
	import "../global.css";
	
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={icon} />
	<title>Engineered</title>
	<meta name="description" content="Software support, delivery and rescue services." />
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

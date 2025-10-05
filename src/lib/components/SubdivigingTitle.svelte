<script lang="ts">
    import BackedContent from "./BackedContent.svelte";

    let {title} : { title: string } = $props();
</script>

<BackedContent><h2 class="subdividing-container">{title}</h2></BackedContent>

<style>
    .subdividing-container {
        margin-top: 40px;
        margin-bottom: 80px;
    }
</style>

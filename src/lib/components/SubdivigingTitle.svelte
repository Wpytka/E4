<script lang="ts">
    import BackedContent from "./BackedContent.svelte";

    let { title }: { title: string } = $props();
</script>

<BackedContent>
    <div class="subdividing-container">
        <h2>{title}</h2>
    </div>
</BackedContent>

<style>
    .subdividing-container {
        margin-top: 40px;
        margin-bottom: 80px;
    }
</style>

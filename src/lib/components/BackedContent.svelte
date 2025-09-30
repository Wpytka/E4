<script lang="ts">
    let { children } = $props();
</script>

<div class="dots-container">
    <div class="content">
        {@render children?.()}
    </div>
</div>

<style>
    .dots-container {
        background-color: white;
        background-image: radial-gradient(
                ellipse at center,
                transparent 10%,
                transparent 10%,
                rgba(255, 255, 255, 0.648) 15%,
                rgba(255, 255, 255, 0.6) 35%,
                rgba(255, 255, 255, 0.9) 55%,
                white 75%
            ),
            radial-gradient(
                circle at center,
                rgb(116, 116, 116) 2px,
                transparent 2px
            );
        background-size:
            100% 100%,
            30px 30px;
        background-repeat: no-repeat, repeat;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }
</style>

<script lang="ts">
    let { children } = $props();
</script>

<div class="animated-dots-container">
    <div class="content">
        {@render children?.()}
    </div>
</div>

<style>
    .animated-dots-container {
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
    }

    .animated-dots-container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: 
            radial-gradient(
                circle at center,
                rgb(116, 116, 116) 2px,
                transparent 2px
            );
        background-size: 30px 30px;
        background-repeat: repeat;
        mask-image: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0) 15%,
            rgba(0, 0, 0, 1) 25%,
            rgba(0, 0, 0, 0) 35%,
            rgba(0, 0, 0, 0) 65%,
            rgba(0, 0, 0, 1) 75%,
            rgba(0, 0, 0, 0) 85%,
            rgba(0, 0, 0, 0) 100%
        );
        mask-size: 200% 100%;
        animation: wave-dots 1.5s linear infinite;
        pointer-events: none;
        z-index: 0;
    }

@keyframes wave-dots {
    0% {
        mask-position: 100% 0;
    }
    100% {
        mask-position: 0% 0;
    }
}

    .animated-dots-container::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(
            ellipse at center,
            transparent 10%,
            transparent 10%,
            rgba(255, 255, 255, 0.3) 15%,
            rgba(255, 255, 255, 0.5) 35%,
            rgba(255, 255, 255, 0.7) 55%,
            rgba(255, 255, 255, 0.9) 75%,
            white 100%
        );
        pointer-events: none;
        z-index: 0;
    }

    .content {
        position: relative;
        z-index: 2;
    }
</style>
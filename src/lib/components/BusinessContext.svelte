<script lang="ts">
    import ContextScene from "$lib/scenes/ContextScene.svelte";
    import { Canvas } from "@threlte/core";
</script>

<div class="container">
    <div class="background-content">
        <h1>Complex</h1>
        <h1>Business</h1>
        <h1>Context</h1>
    </div>

    <div class="canvas-container">
        <Canvas>
                <ContextScene resolution={30} />
        </Canvas>
    </div>
</div>

<style>
    .container {
        position: relative;
        width: 100%;
        /* Ensure container has dimensions */
        min-height: 40vh; /* or whatever minimum height you want */
    }

    .background-content {
        position: absolute;
        z-index: 1;
        
        /* Center the text content */
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
        /* Text styling */
        font-size: clamp(1rem, 8vw, 3rem); /* Responsive font size */
        color: #333;
        text-align: center;
        
        /* Prevent text from interfering with pointer events on canvas */
        pointer-events: none;
    }

    .background-content h1 {
        white-space: nowrap;
        margin: 0; /* Remove default margins */
        line-height: 0.8; 
		font-size: clamp(1rem, 8vw, 3rem);
        /* Alternative: use negative margin for even tighter spacing */
        /* margin: -0.2rem 0; */
    }

    .canvas-container {
        position: absolute;
        z-index: 2;
        
        /* Center the canvas container */
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
        /* Size relative to parent - adjust these percentages as needed */
        width: min(80vw, 600px); /* 80% of viewport width, max 600px */
        height: min(80vh, 600px); /* 80% of viewport height, max 600px */
        
        /* Make canvas background transparent */
        background: transparent;
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
        .canvas-container {
            width: 90vw;
            height: 70vh;
        }
        
        .background-content {
            font-size: clamp(0.8rem, 10vw, 2rem);
        }
    }

    
</style>
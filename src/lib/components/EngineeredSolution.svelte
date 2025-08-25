<script>
    import SolutionScene from "$lib/scenes/SolutionScene.svelte";
    import { Canvas } from "@threlte/core";
</script>

<div class="container">
    <div class="background-content">
        <h1>Efficient</h1>
        <h1>Solutions</h1>
    </div>
    <div class="canvas-container">
        <Canvas>
            <SolutionScene />
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
.canvas-container {
        position: absolute;
        z-index: 1;
        
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

    .frame {
        border: 1px solid #ddd;
        padding: 1.5rem;
        box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
        border-radius: 8px; /* Optional: rounded corners */
    }
    .background-content {
        position: absolute;
        z-index: 2;

        /* Center the text content */
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        /* Text styling */
        color: #333;
        text-align: center;

        /* Prevent text from interfering with pointer events on canvas */
        pointer-events: none;
    }
        .background-content h1 {
        white-space: nowrap;
        margin: 0; /* Remove default margins */
        line-height: 0.8; 
        font-size: clamp(1.5rem, 10vw, 3rem);
    }
</style>

<script lang="ts">
    import { Handle, Position, type NodeProps } from "@xyflow/svelte";

    let { data }: NodeProps = $props();
</script>

<a href="{data.nav as string}" class="no-color-link">
    <div class="node-wrapper">
        <div class="node-gradient-1">
            <div class="node-text">{data.service}</div>
        </div>
    </div>

    <Handle type="target" position={Position.Top} class="handle" />
    <Handle type="source" position={Position.Bottom} class="handle" />
</a>

<style>
    .node-wrapper {
        position: relative;
        display: inline-block;
    }

    .node-wrapper::before {
        content: '';
        position: absolute;
        inset: -3px;
        background: linear-gradient(90deg, #146edc, pink, springgreen, pink, #146edc);
        background-size: 200% 100%;
        border-radius: 2px;
        opacity: 0;
        filter: blur(8px);
        pointer-events: none;
        z-index: -1;
        transition: opacity 0.4s ease-in-out;
        animation: glow-pulse 2s ease-in-out infinite, gradient-shift 3s linear infinite;
        animation-play-state: paused;
    }

    .node-wrapper:hover::before {
        opacity: 0.6;
        animation-play-state: running;
    }

    .node-gradient-1 {
        position: relative;
        border-width: 3px;
        border-style: solid;
        border-image: linear-gradient(to right, #146edc, pink, springgreen) 1;
        background: #fff;
    }

    @keyframes glow-pulse {
        0%, 100% {
            inset: -3px;
            filter: blur(8px);
        }
        50% {
            inset: -6px;
            filter: blur(12px);
        }
    }

    @keyframes gradient-shift {
        0% {
            background-position: 0% 0%;
        }
        100% {
            background-position: 200% 0%;
        }
    }

    .node-text {
        text-justify: auto;
        text-align: center;
        font-size: 1.5rem;
        margin: 1rem 0 1rem;
        padding-left: 20px;
        padding-right: 20px;
        font-weight: 500;
    }
</style>
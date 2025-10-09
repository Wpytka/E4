<script lang="ts">
    import { Handle, Position, type NodeProps } from "@xyflow/svelte";
    import AnimatedBackedContent from "../AnimatedBackedContent.svelte";

    let { data }: NodeProps = $props();
</script>

<div class="no-color-link">
    <AnimatedBackedContent>
        <div class="node-text">{data}</div>
    </AnimatedBackedContent>

    <Handle type="source" position={Position.Bottom} class="handle" />
</div>

<style>
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

<script lang="ts">
    import { Handle, Position, type NodeProps } from "@xyflow/svelte";

    let { data }: NodeProps = $props();
</script>

<a href="{data.nav as string}" class="no-color-link">
    <div class="node-gradient-1">
        <div class="node-text">{data.service}</div>
    </div>

    <Handle type="target" position={Position.Top} class="handle" />
    <Handle type="source" position={Position.Bottom} class="handle" />
</a>

<style>
    .node-gradient-1 {
        border-width: 3px;
        border-style: solid;
        border-image: linear-gradient(to right, #146edc, pink, springgreen) 1;
        background: #fff;
    }
    .node-text {
        text-justify: auto;
        text-align: center;
        font-size: 1.5rem; /* Adjust as needed */
        margin: 1rem 0 1rem;
        padding-left: 20px;
        padding-right: 20px;
        font-weight:500;
    }

</style>

<script lang="ts">
    import { Handle, Position, type NodeProps } from "@xyflow/svelte";

    let { data }: NodeProps = $props();

    function handleMouseOver(){
        console.log("over")
    }
</script>


    <div class="node-gradient-1" onmouseover={handleMouseOver}>
        <div class="node-text">{data.title}</div>
        <div>{data.description}</div>
    </div>

    <Handle type="target" position={Position.Top} class="handle" />
    <Handle type="source" position={Position.Bottom} class="handle" />

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

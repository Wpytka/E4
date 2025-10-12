<script lang='ts'>
    import { Background, BackgroundVariant, SvelteFlow } from "@xyflow/svelte";

    import "@xyflow/svelte/dist/style.css";
    import PopupNodeType from "./Nodes/PopupNodeType.svelte";

    let nodes = $state.raw([
        { id: "delivery", type: 'custom', position: { x: 200, y: 40 }, data: { service: "Delivery", nav:"/experiences#" }, connectable:false, deletable:false},

    ]);

    let edges = $state.raw([

    ]);

      const nodeTypes = {
    custom: PopupNodeType,
  };
</script>

<div class="diagram-wrapper">
    <SvelteFlow bind:nodes {nodeTypes} bind:edges width={1248} height={600} minZoom={1} maxZoom={1} translateExtent={[[0,0],[1248,600]]} preventScrolling={false}>
        <Background bgColor="#fff" variant={BackgroundVariant.Dots} patternColor="#146edc"/>
    </SvelteFlow>
</div>

<style>

</style>
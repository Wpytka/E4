<script lang='ts'>
    import { Background, BackgroundVariant, SvelteFlow } from "@xyflow/svelte";

    import "@xyflow/svelte/dist/style.css";
    import CustomNodeType from "./CustomNodeType.svelte";

    let nodes = $state.raw([
        { id: "delivery", type: 'custom', position: { x: 200, y: 40 }, data: { service: "Delivery", nav:"/experiences#" }, connectable:false, deletable:false},
        { id: "support", type: 'custom', position: { x: 550, y: 40 }, data: { service: "Support", nav:"/experiences" },connectable:false, deletable:false },
        { id: "rescue", type: 'custom', position: { x: 900, y: 40 }, data: { service: "Rescue", nav:"/experiences" },connectable:false, deletable:false },

        { id: "hack", type: 'custom', position: { x: 20, y: 150 }, data: { service: "Innovation Hackathon", nav:"/experiences" },connectable:false, deletable:false },
        { id: "stock", type: 'custom', position: { x: 400, y: 200 }, data: { service: "Stock Tracking", nav:"/experiences" },connectable:false, deletable:false },
        { id: "plan", type: 'custom', position: { x: 100, y: 420 }, data: { service: "Planning and Forecasting automation", nav:"/experiences" },connectable:false, deletable:false },

        { id: "hht", type: 'custom', position: { x: 900, y: 230 }, data: { service: "HHT Rescue", nav:"/experiences" },connectable:false, deletable:false },

        { id: "shop", type: 'custom', position: { x:50, y:300 }, data: { service: "PoS to Shopify Migration", nav:"/experiences" },connectable:false, deletable:false },

        { id: "tenant", type: 'custom', position: { x:750, y:400 }, data: { service: "Tenant system stabilization", nav:"/experiences" },connectable:false, deletable:false },

        { id: "ecosystem", type: 'custom', position: { x:600, y:300 }, data: { service: "Ecosystem support", nav:"/experiences" },connectable:false, deletable:false },

    ]);

    let edges = $state.raw([

      { id: "e1", source: "support", target: "hht", animated:true, selectable:false },
      { id: "e2", source: "rescue", target: "hht", animated:true, selectable:false },

      { id: "e3", source: "support", target: "stock", animated:true, selectable:false },
      { id: "e4", source: "delivery", target: "stock", animated:true, selectable:false },

      { id: "e5", source: "delivery", target: "hack", animated:true, selectable:false },

      { id: "e6", source: "delivery", target: "hack", animated:true, selectable:false },

      { id: "e7", source: "delivery", target: "plan", animated:true, selectable:false },
      { id: "e8", source: "delivery", target: "shop", animated:true, selectable:false },

      { id: "e9", source: "rescue", target: "tenant", animated:true, selectable:false },

      { id: "e10", source: "support", target: "ecosystem", animated:true, selectable:false },

    ]);

      const nodeTypes = {
    custom: CustomNodeType,
  };
</script>

<div class="diagram-wrapper">
    <SvelteFlow bind:nodes {nodeTypes} bind:edges width={1248} height={600} minZoom={1} maxZoom={1} translateExtent={[[0,0],[1248,600]]} preventScrolling={false}>
        <Background bgColor="#fff" variant={BackgroundVariant.Dots} patternColor="#146edc"/>
    </SvelteFlow>
</div>

<style>

</style>
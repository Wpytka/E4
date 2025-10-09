<script lang='ts'>
    import { Background, BackgroundVariant, SvelteFlow } from "@xyflow/svelte";

    import "@xyflow/svelte/dist/style.css";
    import CustomNodeType from "./CustomNodeType.svelte";

    let nodes = $state.raw([
        { id: "1", type: 'custom', position: { x: 470, y: 20 }, data: { service: "Delivery Managment", nav:"/services#delivery-management" }, connectable:false, deletable:false},
        { id: "2", type: 'custom', position: { x: 200, y: 150 }, data: { service: "Support", nav:"/services" },connectable:false, deletable:false },
        { id: "3", type: 'custom', position: { x: 750, y: 150 }, data: { service: "Software Delivery", nav:"/services" },connectable:false, deletable:false },

        { id: "21", type: 'custom', position: { x: 400, y: 300 }, data: { service: "Workshops", nav:"/services" },connectable:false, deletable:false },
        { id: "22", type: 'custom', position: { x: 600, y: 300 }, data: { service: "Trainings", nav:"/services" },connectable:false, deletable:false },

        { id: "23", type: 'custom', position: { x: 50, y: 450 }, data: { service: "Software Rescue Service", nav:"/services#rescue" },connectable:false, deletable:false },

        { id: "31", type: 'custom', position: { x: 1100, y: 250 }, data: { service: "PoC", nav:"/services" },connectable:false, deletable:false },
        { id: "32", type: 'custom', position: { x: 900, y: 350 }, data: { service: "R&D", nav:"/services" },connectable:false, deletable:false },
        { id: "33", type: 'custom', position: { x: 900, y: 450 }, data: { service: "Project Management", nav:"/services" },connectable:false, deletable:false },
    ]);

    let edges = $state.raw([
      { id: "e1-2", source: "1", target: "2", animated:true, selectable:false },
      { id: "e1-3", source: "1", target: "3", animated:true, selectable:false },

      { id: "e2-23", source: "2", target: "23", animated:true, selectable:false },

      { id: "e2-21", source: "2", target: "21", animated:true, selectable:false },
      { id: "e2-22", source: "2", target: "22", animated:true, selectable:false },

      { id: "e3-21", source: "3", target: "21", animated:true, selectable:false },
      { id: "e3-22", source: "3", target: "22", animated:true, selectable:false },

      { id: "e3-31", source: "3", target: "31", animated:true, selectable:false },
      { id: "e3-32", source: "31", target: "32", animated:true, selectable:false },
      { id: "e3-33", source: "32", target: "33", animated:true, selectable:false }
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
<script lang="ts">
  import BackedContent from "$lib/components/BackedContent.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import NodeDiagram from "$lib/components/Diagramming/ServicesDiagram.svelte";
</script>

<Header />
<div class="page-wrapper">
  <NodeDiagram></NodeDiagram>
  <div>
    <BackedContent><h2 class="values-container">Services</h2></BackedContent>
    <div id="delivery"></div>
    <div id="support"></div>
    <div id="rescue"></div>
  </div>
</div>
<Footer />

<style>
  .page-wrapper {
    max-width: 1248px;
    margin: 0 auto;
  }
</style>

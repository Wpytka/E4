<script lang="ts">
  import BackedContent from "$lib/components/BackedContent.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import ExperienceHackathon from "$lib/parts/Experience-InnovationHackathon.svelte";
  import ExperienceHhtRescue from "$lib/parts/Experience-HHTRescue.svelte";
  import ExperiencesDiagram from "$lib/components/Diagramming/ExperiencesDiagram.svelte";
</script>

<Header />
<div class="page-wrapper">

  <BackedContent>
    <div class="break-title">
        <span class="break-title-bold">Experiences</span>
    </div>
  </BackedContent>

    <h3 class="subtitle">
    We are working across multiple industires with enterprise level software for over 12 years.
    Our clients experiences are the foundation of our appporach.
  </h3>

  <ExperiencesDiagram></ExperiencesDiagram>
  <div>
    <BackedContent><h2 class="values-container">Experiences</h2></BackedContent>
    <div id="hackathon">
      <ExperienceHackathon />
    </div>
    <div id="hht">
      <ExperienceHhtRescue />
    </div>
  </div>
</div>
<Footer />

<style>
</style>

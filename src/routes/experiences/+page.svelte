<script lang="ts">
  import BackedContent from "$lib/components/BackedContent.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import ExperienceHackathon from "$lib/parts/Experience-InnovationHackathon.svelte";
  import ExperienceHhtRescue from "$lib/parts/Experience-HHTRescue.svelte";
</script>

<Header />
<div class="page-wrapper">
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
  .page-wrapper {
    max-width: 1248px;
    margin: 0 auto;
  }
</style>

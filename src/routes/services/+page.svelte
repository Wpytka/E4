<script lang="ts">
  import BackedContent from "$lib/components/BackedContent.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import ServicesNodeDiagram from "$lib/components/Diagramming/ServicesDiagram.svelte";
  import SubdivigingTitle from "$lib/components/SubdivigingTitle.svelte";
    import BulletGroup from "$lib/components/BulletGroup.svelte";
    import PartRescueDescription from "$lib/parts/PartRescueDescription.svelte";
</script>

<Header />
<div class="page-wrapper">

  <BackedContent>
    <div class="break-title">
        <span class="break-title-bold">Services</span>
    </div>
  </BackedContent>

  <h3 class="subtitle">
    We provide comprehensive software delivery, support and rescue services. Our
    approch is holistic from business understanding to software system
    solutions reliability and longevity.
  </h3>

  <ServicesNodeDiagram></ServicesNodeDiagram>



  <div id="rescue">
    <SubdivigingTitle title="Software Rescue" />

    <PartRescueDescription/>

    <SubdivigingTitle title="Approach" />

    {#snippet listenSnippet()}
      <div>
        <p>
        We understand that context matters. We will listen to you and hear your story about challenges you are facing</p>
      </div>
    {/snippet}

    {#snippet auditSnippet()}
      <div>
        <p>Our Engineering Team and Architects will conduct a through analysis of your code, architecture and environment​</p>
      </div>
    {/snippet}

    {#snippet analysisSnippet()}
      <div>
        <p>Based on our technical review, provided context we will prepare a detailed analysis of your problem with our proposed solutions and implementation plan to get you and your product to a safe heaven​</p>
      </div>
    {/snippet}

    {#snippet implementationSnippet()}
      <div>
        <p>Our Appointed Delivery Manager and Engineering team will work with you, provide regular updates throughout the implementation of the rescue service</p>
      </div>
    {/snippet}

    {#snippet stabilizationSnippet()}
      <div>
        <p>
Once our solution is in place we observe and monitor it. After agreed successful stabilization and acceptance criteria met - mission accomplished</p>
      </div>
    {/snippet}

    {#snippet supportSnippet()}
      <div>
        <p>After successful stabilization period we transition Rescue Service into regular support and maintenance of the solution.</p>
      </div>
    {/snippet}
    <BulletGroup
      items={[
        {
          title: "First we Listne",
          content: listenSnippet,
        },
        {
          title: "Code Audit and Review",
          content: auditSnippet,
        },
        {
          title: "Problem Analysis",
          content: analysisSnippet,
        },
        {
          title: "Implementation",
          content: implementationSnippet,
        },
        {
          title: "Stabilization",
          content: stabilizationSnippet,
        },
        {
          title: "Regular Support and Maintenance",
          content: supportSnippet,
        },
      ]} 
      numbered={true}
    />

  <div id="delivery"></div>
  <div id="support"></div>
  <div id="rescue"></div>
  </div>
</div>
<Footer />

<style>
</style>

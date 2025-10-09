<script lang="ts">
  import BackedContent from "../components/BackedContent.svelte";
  import StaticBulletContainer from "$lib/components/StaticBulletContainer.svelte";
</script>

<div class="experience-columns-container">
  <div class="experience-column">
    <StaticBulletContainer title={"When"}>
       <div class="gradient-text highlight">Have you asked thoese questions:</div>
      <div class="small-text-block">
        <p>Unhappy customers?​</p>
        <p>Clients leaving?</p>
        <p>Backlog of bugs incidents?​</p>
        <p>Technical debt?</p>
        <p>Deadlines crossed?</p>
        <p>Demands not met?</p>
        <p>Attrition problems?</p>
        <p>Budgets collapsing?</p>
      </div>
    </StaticBulletContainer>
  </div>
  <div class="experience-column">
    <StaticBulletContainer title={"What"}>
      <div class="gradient-text highlight">If you are facing these issues:</div>
      <div class="small-text-block">
        <p>
          Our Team has a vast experience in rescuing services, products from
          costly stalemates and seemingly unescable pitfalls.​
        </p>
        <p>
          Our tailored approach ensures that your specific concerns are fully
          addressed, even when they are not yet clearly defined.
        </p>
        <p>
          Our work is aimed to be built on a partnership founded on mutual engagement and understanding.
        </p>
      </div>
    </StaticBulletContainer>
  </div>
  <div class="experience-column">
    <StaticBulletContainer title={"Why"}>
      <div class="gradient-text highlight">Transparency:</div>
      <div class="small-text-block">
        <p>
          We are transparent throughout the process. You will know costs, risks
          and benefits upfront.​
        </p>
      </div>
      <div class="gradient-text highlight">Result Oriented:</div>
      <div class="small-text-block">
        <p>
          We maintain a solid record of successful solutions resulting from our
          committed partnerships.
        </p>
      </div>
      <div class="gradient-text highlight">With You Afterwards:</div>
      <div class="small-text-block">
        <p>
          Once we complete the rescue service, we will offer our Support and
          Maintenance services to take care of you and your product afterwards.
        </p>
      </div>
    </StaticBulletContainer>
  </div>
</div>

<style>
  .experience-columns-container {
    display: flex;
    gap: 1rem;
    justify-content: center;
  }

  .experience-column {
    flex: 1;
    display: flex;
  }
  .highlight {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .small-text-block {
    font-size: small;
    text-align: justify;
    align-items: center;
  }
</style>

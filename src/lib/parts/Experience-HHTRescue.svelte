<script>
  import BackedContent from "../components/BackedContent.svelte";
  import StaticBulletContainer from "$lib/components/StaticBulletContainer.svelte";
</script>

<div>
  <BackedContent
    ><h2 class="values-container">
      Hand Held Terminal - Software Rescue
    </h2></BackedContent
  >
  <div class="experience-columns-container">
    <div class="experience-column">
      <StaticBulletContainer title={"Case"}>
        <div class="gradient-text highlight">Summary:</div>
        <div class="small-text-block">
          Hand-held scanners and PC work stations with custom software used for
          all warehousing and manufacturing operations maintained and
          continually developed for over 20 years. System has been error-prone
          for years, requiring dedicated team for support and used legacy
          technologies.
        </div>
        <div class="gradient-text highlight">Business context:</div>
        <div class="small-text-block">
          Due to systems quality and age, operations were impacted on daily
          bases with the biggest risk of complete operations failure. Due to
          required business knowledge technical teams had best resources frozen
          for support. With need of expansion the system quality became a main
          blocker to upcoming projects.
        </div>
        <div class="gradient-text highlight">Technology context:</div>
        <div class="small-text-block">
          Very outdated technologies, need of ownership of physical proprietary
          devises for engineers, data inconsistencies, software architecture
          cause the system to be vulnerable to issues stemming from
          infrastructure failure, manual data recovery processes, decentralized
          application state, management, release processes and logging.
          Everything on-prem
        </div>
      </StaticBulletContainer>
    </div>
    <div class="experience-column">
      <StaticBulletContainer title={"Approach"}>
        <div class="gradient-text highlight">Idea:</div>
        <div class="small-text-block">
          What was needed was stabilization of the system, and allowing the
          shift of engineering engagement from support into development of the
          system. To facilitate that, and taking in consideration business
          constraints related to budgets and need of continuous operations a
          plan was proposed to perform a step-by-step software solution
          recovery.
        </div>
        <div class="gradient-text highlight">Execution:</div>
        <div class="small-text-block">
          1.Two months support stabilization phase via team augmentation in
          parallel with business analysis.
          <br />
          2.Establishing cooperation with external teams using/integrating with the
          system.
          <br />
          3.Reduction of dependencies on old technologies, old architecture approaches
          and freeing up key technical resources by migration of mobile application
          component into Android ecosystem, ensuring both versions can cooperate
          in production for intermittent migration.
          <br />
          4.Introduction of online-first and cloud-first approach for certain integrations
          of the system, splitting system responsibilities and simplifying engineering
          engagements.
          <br />
          5.Identification of domains, design and partnering in organization wide
          technical changes to facilitate new architecture.
          <br />
          6.Step-by-step integrations migration into cloud with cadence dictated
          by business needs.
        </div></StaticBulletContainer
      >
    </div>
    <div class="experience-column">
      <StaticBulletContainer title={"Impact"}>
        <div class="gradient-text highlight">Business:</div>
        <div class="small-text-block">
          Reduced risk of operations failure. Ensured system longevity and
          enables scalability into a new production region.
        </div>
        <div class="gradient-text highlight">Technical:</div>
        <div class="small-text-block">
          Complete system migration into cloud with new architecture. Modernized
          tech stack, removed engineering requirement of hardware devices via
          emulation. Introduced data capture redundancies, generalized build and
          release processes, enabled system scalability and ensured ability for
          further development.
        </div>
        <div class="gradient-text highlight">Financial:</div>
        <div class="small-text-block">
          50% reduction of engineering costs for system support.
          <br />
          100% reduction of incidents related to data consistency.
          <br />
          100% reduction in workspace PC dependency.
        </div>
      </StaticBulletContainer>
    </div>
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

<script>
  import BackedContent from "../components/BackedContent.svelte";
  import BulletContainer from "../components/BulletContainer.svelte";
  import StaticBulletContainer from "$lib/components/StaticBulletContainer.svelte";
</script>

<div>
  <BackedContent
    ><h2 class="values-container">
      Innovation Hackathon - Digital Transformations
    </h2></BackedContent
  >
  <div class="experience-columns-container">
    <div class="experience-column">
      <StaticBulletContainer title={"Case"}>
        <div class="gradient-text highlight">Summary:</div>
        <div class="small-text-block">
          Enterprise teams operated in silos, limiting cross-functional
          collaboration and innovation. Despite a strong internal development
          capability, solutions to business challenges were often confined to
          isolated teams.
        </div>
        <div class="gradient-text highlight">Business context:</div>
        <div class="small-text-block">
          Company faced challenges in leveraging its full technological
          potential due to departmental compartmentalization. The lack of
          cross-team engagement hindered innovation, slowing down delivery and
          reducing the impact of technology investments. Leadership recognized
          the need to unify efforts and create a scalable framework for future
          problem-solving across the enterprise.
        </div>
        <div class="gradient-text highlight">Technology context:</div>
        <div class="small-text-block">
          The Business Technology function had evolved into specialized units
          with limited interaction. This led to fragmented knowledge, isolated
          development efforts, and underutilized collective expertise. There was
          no shared innovation process, and teams lacked a common framework for
          tackling complex problems together.
        </div>
      </StaticBulletContainer>
    </div>
    <div class="experience-column">
      <StaticBulletContainer title={"Approach"}>
        <div class="gradient-text highlight">Idea:</div>
        <div class="small-text-block">
          Introduction of a structured hackathon grounded in the Double Diamond
          design thinking methodology. Emphasis on abstract thinking, personal
          insights, and cutting-edge technologies. Encouragement of
          collaboration across teams and departments.
        </div>
        <div class="gradient-text highlight">Execution:</div>
        <div class="small-text-block">
          <p>
            Preparation by briefing sessions to align participants on goals and
            team composition. Teams encouraged to explore problem domains but
            not pre-solve them.
          </p>
          <p>
            Two-day onsite event with dedicated team spaces. Facilitators guided
            teams through each Double Diamond phase:
          </p>
          Discover – Explore business and tech layers.
          <br />
          Define – Select and frame the right challenge.
          <br />
          Design – Explore multiple solution paths.
          <br />
          Develop – Create proof-of-concept and present.
          <p>
            Participants produced Online-first and cloud-first
            integration strategies, solution definitions, actionable plans and working proof of concepts.
          </p>
        </div>
      </StaticBulletContainer>
    </div>
    <div class="experience-column">
      <StaticBulletContainer title={"Impact"}>
        <div class="gradient-text highlight">Business:</div>
        <div class="small-text-block">
          Fostered a culture of innovation and collaboration. Created scalable
          model for innovation events and problem-solving across departments.
          Increased engagement and ownership among participants.
        </div>
        <div class="gradient-text highlight">Technical:</div>
        <div class="small-text-block">
          Encouraged exploration of modern technologies and methodologies.
          Created prototypes and conceptual solutions aligned with IT strategy.
          Exposed technical teams to new technology stacks and encouraged
          experimentation with aim to enhance future architectural decision.
        </div>
        <div class="gradient-text highlight">Financial:</div>
        <div class="small-text-block">
          Through 2 events addressed 4 real organization pain points with
          technical solutions. Created proofs of concept and proofs of value for
          9 projects with financial benefits to the company.
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
  .gradient-text {
    background: linear-gradient(to right, rgb(20, 110, 220), pink, springgreen);
    background-size: 200% 200%;
    animation: rainbow 2s ease-in-out infinite;
    background-clip: text;
    -webkit-background-clip: text;
    color: rgba(0, 0, 0, 1);
    transition: color 0.2s ease-in-out;
  }
  .gradient-text:hover {
    color: rgba(0, 0, 0, 0);
  }
  @keyframes rainbow {
    0% {
      background-position: left;
    }
    50% {
      background-position: right;
    }
    100% {
      background-position: left;
    }
  }
</style>

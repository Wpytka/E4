<script lang="ts">
  import BusinessContext from "$lib/components/BusinessContext.svelte";
  import EngineeredSolution from "$lib/components/EngineeredSolution.svelte";
  import BackedContent from "$lib/components/BackedContent.svelte";
  import Bio from "$lib/components/Bio.svelte";
  import Devider from "$lib/components/Devider.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Header from "$lib/components/Header.svelte";
  import BulletGroup from "$lib/components/BulletGroup.svelte";

   import { base } from "$app/paths";
  import TableWithNote from "$lib/components/TableWithNote.svelte";
    import AnimatedBackedContent from "$lib/components/AnimatedBackedContent.svelte";
  import ExperienceHackathon from "$lib/parts/Experience-InnovationHackathon.svelte";
  import ExperienceHhtRescue from "$lib/parts/Experience-HHTRescue.svelte";
</script>

<Header />

<div class="page-wrapper">
  <BackedContent>
    <div class="break-title">
      <span class="break-title-bold">Software</span>
      <span>
        Delivery, Support and Rescue services where
        <span class="gradient-text"> context </span> matters.
      </span>
    </div>
  </BackedContent>

  <div class="scene-container">
    <div class="component">
      <BusinessContext />
    </div>

    <div class="component">
      <AnimatedBackedContent>
        <div class="image-container">
          <img src={`${base}/Arrow2-NoBack.png`} alt="Logo" class="responsive-image" />
        </div>
      </AnimatedBackedContent>
    </div>
    <div class="component">
      <EngineeredSolution />
    </div>
  </div>

  <div id="services">
    <BackedContent><h2 class="values-container">Services</h2></BackedContent>
  </div>
  <div id="experiences">
    <BackedContent><h2 class="values-container">Experiences</h2></BackedContent>
    <ExperienceHackathon/>
    <ExperienceHhtRescue/>
  </div>
  <div id="technologies" class="tech-container">
    <TableWithNote
      title={"We are professionals at:"}
      headers={[
        "Platforms & Cloud",
        "Data",
        "Languages",
        "Backend Frameworks",
        "Frontend Frameworks",
      ]}
      values={[
        ["Azure", "Power Platform", "Shopify", "Umbraco Cloud", "AWS", "Sentry", "DataDog"],
        ["MSSQL", "PowerBi", "CosmosDB", "Azure Synapse", "ADF", "SQLite", "MongoDB"],
        ["C#", "Python", "TS/JS", "HTML/CSS", "SQL", "Powershell", "Bash"],
        [".NET", "Django", "FastApi", "Express.js", "Umbraco"],
        ["Blazor", "MAUI", "Svelte", "Angular", "React", "Remix", "htmx"],
      ]}
    >
      <h2 class="list-title">We are:</h2>
      <ol class="bullet-title">
        <li>Cloud-Native</li>
        <li>Data-Driven</li>
        <li>Security-Minded</li>
        <li>Goal-Oriented</li>
      </ol>
    </TableWithNote>
  </div>
  <div id="us">
    {#snippet simplicityContent()}
      <div>
        <p>
          We trust that complexity emerges from aggregation of simple solutions.
        </p>
        <p>Our Decisions are always driven by logic and context.</p>
        <p>
          We keep ourselves our solutions grounded, our ways of working are
          transparent and easy to follow.
        </p>
        <p>Ockham Razor's concept is close to our hearts.</p>
      </div>
    {/snippet}

    {#snippet engineeringContent()}
      <div>
        <p>We solve problems and business challenges with Technology.</p>
        <p>We always strive for practical approach.</p>
        <p>
          We believe that technology itself is only a tool - giving it purpose
          and placing it in right context is key.
        </p>
        <p>Can't be done? We heard that before and made things work.</p>
      </div>
    {/snippet}

    {#snippet greatnessContent()}
      <div>
        <p>We are great at what we do.</p>
        <p>Open mindness is needed in every aspect of our work.</p>
        <p>How we do things matters.</p>
      </div>
    {/snippet}

    {#snippet likeContent()}
      <div>
        <p>We Care. About our Team, Clients and Community.</p>
        <p>We have fun with what we do.</p>
      </div>
    {/snippet}

    {#snippet winContent()}
      <div>
        <p>
          We approach each situation having everyone's interest at mind and
          workout a solution that all sides feel comfortable with.
        </p>
        <p>
          Challenges and risks are opportunities to make things better and to
          plan ahead.
        </p>
      </div>
    {/snippet}

    {#snippet transparencyContent()}
      <div>
        <p>We are transparent with our Teams and Clients.</p>
      </div>
    {/snippet}

    {#snippet ownershipContent()}
      <div>
        <p>We take Ownership of Our Solutions.</p>
        <p>
          We Trust in each other and we own situations that arise and lead them
          to a conclusion.
        </p>
        <p>Proactive in everything we do.</p>
        <p>We remain accountable to Ourselves and to our Clients.</p>
      </div>
    {/snippet}

    <BackedContent><h2 class="values-container">Core Values</h2></BackedContent>

    <BulletGroup
      items={[
        {
          title: "Simplicity is Key",
          content: simplicityContent,
        },
        {
          title: "Engineering at Heart",
          content: engineeringContent,
        },
        {
          title: "Strive for Greatness",
          content: greatnessContent,
        },
        {
          title: "Like & Care",
          content: likeContent,
        },
        {
          title: "Win-Win Approach",
          content: winContent,
        },
        {
          title: "Transparency",
          content: transparencyContent,
        },
        {
          title: "Ownership",
          content: ownershipContent,
        },
      ]}
    />

    <Bio title="The Team" reversed={false} imgSrc={null}>
      <div class="content text-block">
        <p>
          We met in another organization, assembled to take on challenging work
          that had fallen through the cracks—internal tools, complex technical
          support issues, service recovery, and projects that required close
          collaboration with clients. By tackling these areas, we built strong
          working relationships that grew into lasting partnerships. After being
          acquired by a "Big 5 Consulting" and facing drastic changes in ways of
          working, the team decided to organize independently to stay focused on
          quality and impact.
        </p>
        <p>
          Made up entirely of senior professionals, we combine deep hands-on
          experience with older systems and a strong command of modern,
          cutting-edge technologies. Our goal is simple: support real-world
          operations. Whether that means building tailored software, guiding
          digital change, offering technical support, delivering training, or
          shaping early-stage ideas—we bring practical expertise and a
          clear-eyed approach to getting things done.
        </p>
      </div>
    </Bio>
    <div class="">
      <Bio imgSrc={`${base}/Placeholder.png`} title="Jhon Doe" reversed={false}>
        <div class="content text-block">
          <p>
            Delivery Manager with over 10 years of experience leading IT
            delivery teams and driving business transformation through strategic
            programs. My expertise lies in overseeing end-to-end delivery across
            both operational support and project landscapes, with a strong focus
            on aligning initiatives with broader strategic goals. I've worked
            across diverse industries including Premium Goods manufacturing,
            Insurance, and Technology—bringing a unique approach to each
            engagement.
          </p>
          <p>
            I thrive in complex environments, where I can bring structure to
            ambiguity—leading delivery teams, managing budgets and timelines,
            and ensuring services are not only delivered but continuously
            optimized. With a hands-on approach to stakeholder engagement and a
            deep focus on continuous improvement, I aim to build delivery models
            and solutions that are tuned to your needs.
          </p>
          <p>
            Outside of work, I'm a calisthenics enthusiast who thrives on
            routine and discipline—qualities that naturally extend into my
            professional life. I also paint miniatures in my spare time, a hobby
            that demands an extreme attention to detail and patience—traits I
            bring to the table while working with my partners.
          </p>
        </div>
      </Bio>
      <Devider />
      <Bio imgSrc={`${base}/Placeholder.png`} title="Jhon Doe" reversed={true}>
        <div class="content text-block">
          <p>
            Engineering Manager with 11 Years of experience across technology,
            manufacturing and healthcare industries I learned to work in, and
            build dynamic, fast-paced environments. My background includes both
            startup, and established enterprises settings with a broad
            understanding of how software related services operate.
          </p>
          <p>
            Throughout my career, I have taken on multiple roles from a solution
            architect through digital transformations consultant to engineering
            manger building and leading multiple cross-functional teams. I have
            contributed to a wide range of project types, including end-to-end
            software delivery, building internal tooling, consultancy for
            external clients, team augmentation engagements, and support
            services.
          </p>
          <p>
            My interest in trail running helps build the endurance and focus I
            bring to work every day, and as a handyman and a DIY person I
            practice my problem-solving skills and ability to find practical,
            creative solutions.
          </p>
        </div>
      </Bio>
    </div>
  </div>
  <div id="contact">
    <BackedContent><h2 class="values-container">Contact</h2></BackedContent>
  </div>
</div>
<Footer />

<style>
  .page-wrapper {
    max-width: 1248px;
    margin: 0 auto;

  }

  .scene-container {
    display: flex;
    height: 500px; /* Full viewport height */
    justify-content: center;
    align-items: center;
    gap: 1rem; /* Add space between components */
    padding: 1rem; /* Add some padding around the container */
  }

  .tech-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: stretch;
    margin-top: 40px;
    margin-bottom: 40px;
  }

  .bullet-title {
    font-weight: 900;
    font-size: x-large;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 79%; 
  }

  .list-title {
    margin-bottom: 30px;
  }

  .bio-container {
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    align-items: stretch;
  }

  .image-container{
    align-items: center;
  }

  .component {
    flex: 1; /* Each takes equal space (1/3) */
    position: relative; /* Key: creates positioning context */
    overflow: hidden; /* Optional */ /* Same height as container */
    justify-content: center;
    min-width: 0; /* Prevent flex items from overflowing */
  }

  .values-container {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .responsive-image {
    width: clamp(100px, 25vw, 400px);
    height: auto; /* This is crucial for maintaining aspect ratio */
    max-width: 100%; /* Maintain aspect ratio */

    /* Center the image */
    display: block;
  }

  /* Mobile adjustments */
  @media (max-width: 1024px) {
    .scene-container {
      flex-direction: column;
      height: auto;
      align-items: center;
    }

    .component {
      width: 90vw;
      flex: none; /* Disable flex-grow/shrink */
    }
  }

  @media (max-width: 768px) {
    .responsive-image {
      width: 45vw;
    }
  }

  .break-title {
    text-align: center;
    font-size: 2.5rem; /* Adjust as needed */
    margin: 10rem 0 10rem;
  }

  .break-title-bold {
    font-weight: 900;
  }

  .text-block {
    font-size: medium;
    text-align: justify;
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

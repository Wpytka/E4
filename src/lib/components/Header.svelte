<script lang="ts">
  import { base } from "$app/paths";
</script>

<div class="header">
  <div class="header-image-container ">
    <a href="/"><img src={`${base}/Logo.png`} alt="Logo" class="header-static-image" /></a>
  </div>
  <div class="header-links">
    <a href="/services" class="link gradient-text">Services</a>
    <a href="/experiences" class="link gradient-text">Experiences</a>
    <a href="#technologies" class="link gradient-text">Technologies</a>
    <a href="#us" class="link gradient-text">Us</a>
    <a href="#contact" class="link gradient-text">Contact</a>
  </div>
</div>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  .header-image-container {
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: flex-start;
  }

  .header-links {
    display: flex;
    gap: 1rem;
  }

  .header-static-image {
    width: 200px;
    height: auto;
    max-width: 100%;
    display: block;
  }
</style>

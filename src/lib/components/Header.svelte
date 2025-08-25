<script lang="ts">
  import { base } from "$app/paths";

</script>

<div class="header">
  <div class="image-container">
    <img src={`${base}/Logo.png`} alt="Logo" class="static-image" />
  </div>
  <div class="nav">
    <a href="#services" class="gradient-text">Services</a>
    <a href="#experiences" class="gradient-text">Experiences</a>
    <a href="#technologies" class="gradient-text">Technologies</a>
    <a href="#us" class="gradient-text">Us</a>
    <a href="#contact" class="gradient-text">Contact</a>
  </div>
</div>

<style>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  .image-container {
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: flex-start;
  }

  .nav {
    display: flex;
    gap: 1rem;
  }

  .nav a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  .static-image {
    width: 200px;
    height: auto;
    max-width: 100%;
    display: block;
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

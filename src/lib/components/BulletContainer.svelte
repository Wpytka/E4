<script lang="ts">
  import Devider from "./Devider.svelte";

  let { title, children } = $props();
  let isExpanded = $state(false);
  let contentDiv: HTMLDivElement;

  function toggle() {
    isExpanded = !isExpanded;
  }
</script>

<ul>
  <li class="bullet-title">
    <button class="bullet-button" onclick={toggle}>
      {title}
    </button>
  </li>
</ul>

<div 
  class="titled-container-content" 
  class:expanded={isExpanded}
  bind:this={contentDiv}
>
  <Devider></Devider>
  <div class="titled-container-text">
    {@render children()}
  </div>
</div>

<style>
  .bullet-title {
    font-weight: 900;
    font-size: x-large;
  }

  .bullet-button {
    /* Reset all button styling */
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    font: inherit;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    outline: inherit;
    
    /* Make it behave like inline text */
    display: inline;
    line-height: inherit;
  }

  .bullet-button:focus {
    outline: 1px dotted currentColor;
    outline-offset: 2px;
  }

  .bullet-button:hover {
    text-decoration: underline;
  }

  .titled-container-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out;
    display: flex;
    justify-content: left;
  }

  .titled-container-content.expanded {
    max-height: 500px; /* Adjust based on your content needs */
    transition: max-height 0.3s ease-in;
  }

  .titled-container-text {
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .titled-container-content.expanded .titled-container-text {
    opacity: 1;
    transition: opacity 0.2s ease 0.1s; /* Slight delay for smoother effect */
  }
</style>
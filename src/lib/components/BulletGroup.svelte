<script lang="ts">
  import BackedContent from "./BackedContent.svelte";
  import Devider from "./Devider.svelte";

  interface AccordionItem {
    title: string;
    content: import("svelte").Snippet;
  }

  let { items = [] }: { items: AccordionItem[] } = $props();
  let activeIndex = $state<number | null>(0);

  function selectItem(index: number) {
    activeIndex = activeIndex === index ? null : index;
  }
</script>

<div class="horizontal-accordion">
  <div class="accordion-titles">
    <ul>
      {#each items as item, index}
        <li class="bullet-title">
          <button
            class="bullet-button"
            class:active={activeIndex === index}
            onclick={() => selectItem(index)}
          >
            {item.title}
          </button>
        </li>
      {/each}
    </ul>
  </div>

  {#if activeIndex !== null && items[activeIndex]}
    <div class="divider-section">
      <Devider></Devider>
    </div>
    <div class="accordion-content">
      <div class="content-panel expanded">
        <div class="content-text">
          {@render items[activeIndex].content()}
        </div>
      </div>
    </div>
    
  {/if}
</div>

<style>
  .horizontal-accordion {
    display: flex;
    gap: 2rem;
    min-height: 200px;
  }

  .accordion-titles {
    flex: 0 0 auto;
    min-width: 33%;
  }

  .bullet-title {
    font-weight: 900;
    font-size: x-large;
    margin-bottom: 30px;
    margin-top: 30px;
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
    outline: none;
    outline-offset: 2px;
  }

  .bullet-button:hover {
    background: linear-gradient(to right, rgb(20, 110, 220), pink, springgreen);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  .bullet-button.active {
    background: linear-gradient(to right, rgb(20, 110, 220), pink, springgreen);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  .accordion-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    position: relative;
    overflow: hidden;
  }

  .content-panel {
    width: 0;
    overflow: hidden;
    transition: width 0.3s ease-out;
    display: flex;
    flex-direction: column;
  }

  .content-panel.expanded {
    width: 100%;
    transition: width 0.3s ease-in;
  }

  .content-text {
    opacity: 0;
    transition: opacity 0.2s ease;
    padding: 1rem 0;
    font-weight: 400;
    font-size: large;
  }

  .content-panel.expanded .content-text {
    opacity: 1;
    transition: opacity 0.2s ease 0.1s;
  }
</style>

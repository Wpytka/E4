<script lang="ts">
  import Devider from "./Devider.svelte";

  let { title, children } = $props();
</script>

<div class="container">
  <ul>
    <li class="bullet-title">
      <button class="bullet-point">
        {title}
      </button>
    </li>
  </ul>

  <div class="titled-container-content">
    <Devider></Devider>
    <div class="titled-container-text">
      {@render children?.()}
    </div>
  </div>
</div>

<style>
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .bullet-title {
    font-weight: 900;
    font-size: x-large;
  }

  .bullet-point {
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    font: inherit;
    color: inherit;
    outline: inherit;
    display: inline;
    line-height: inherit;
  }

  .titled-container-content {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: stretch;
    flex-grow: 1;
  }
  .titled-container-text {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
</style>

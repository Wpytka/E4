<script lang="ts">
  import BackedContent from "./BackedContent.svelte";

  let { imgSrc, title, children, reversed } = $props();
</script>

{#if imgSrc}
  {#if reversed}
    <BackedContent>
      <h2 class="right-title">{title}</h2>
      <div class="bio">
        <div class="">
          {@render children()}
        </div>
        <img src={imgSrc} alt="Logo" class="right-image" />
      </div>
    </BackedContent>
  {:else}
    <BackedContent>
      <h2>{title}</h2>
      <div class="bio">
        <img src={imgSrc} alt="Logo" class="image" />
        {@render children()}
      </div>
    </BackedContent>
  {/if}
{:else}
  <BackedContent>
    <h2 class="center">{title}</h2>
    <div class="bio">
      <div class="">
        {@render children()}
      </div>
    </div>
  </BackedContent>
{/if}

<style>
  .bio {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    max-width: 1248px;
  }
  .image {
    max-width: 20%;
    margin-right: 1rem;
  }
  .right-image {
    max-width: 20%;
    margin-left: 1rem;
  }
  .right-title{
    text-align: right;
  }
  .center {
    text-align: center;
  }
</style>

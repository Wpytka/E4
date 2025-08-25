<script lang="ts">
  let {elements}:{elements:string[]} = $props()
</script>

<div class="list=container">
  <ul>
    {#each elements as element}
      <li>{element}</li>
    {/each}
  </ul>

</div>

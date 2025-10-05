<script lang="ts">
  import Devider from "./Devider.svelte";
  import TableContent from "./TableContent.svelte";

  let {title,headers,values, children} : { title: string; headers: string[]; values: string[][], children:any } = $props();
</script>

<div class="table-with-note-container">
<TableContent title={title} headers={headers} values={values}></TableContent>
<div class="divider-section">
    <Devider></Devider>
</div>
<div class="note-content">
    {@render children?.()}
</div>
</div>

<style>
    .table-with-note-container{
    max-width: 1248px;
    display: flex;
    gap: 2rem;
    min-height: 200px;
    }

  .note-content {
    min-width: 33%;
  }
</style>
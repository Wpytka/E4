<script lang="ts">
    let { title, headers, values}: {title: string, headers: string[], values: string[][]} = $props();

    let maxRows = 0;
    if (values) {
        for (const col of values) {
            if (col.length > maxRows) {
                maxRows = col.length;
            }
        }
    }
</script>

<div>
    <h2 class="table-title">{title}</h2>
    <table class="table-content">
        <thead>
            <tr>
                {#each headers as columnHeading}
                    <th class="table-header">{columnHeading}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each Array(maxRows) as _, i}
                <tr>
                    {#each values as column, j}
                        <td class="table-cell">{column[i] || ''}</td>
                    {/each}
                </tr>
            {/each}
        </tbody>
    </table>
</div>

<style>

.table-title {
    text-align: center;
    margin-bottom: 30px;
}

.table-content {
    border-collapse: separate;
    table-layout: fixed;
    border-spacing: 2px;
    background-image: linear-gradient(to right, rgb(20, 110, 220), pink, springgreen);
    border-radius: 5px;
}
.table-header, .table-cell {
    padding: 5px;
    background-color: white;
    position: relative;
    white-space: nowrap; 
    min-width: 200px;
    color:black;
}

</style>

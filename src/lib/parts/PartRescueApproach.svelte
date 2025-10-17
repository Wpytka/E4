<script lang="ts">
    import BackedContent from "../components/BackedContent.svelte";
    import StaticBulletContainer from "$lib/components/StaticBulletContainer.svelte";
</script>

<div class="experience-columns-container">
    <div class="experience-column">
        <StaticBulletContainer title={"Discovery and Review"}>
            <div>
                <ul>
                    <li class="table-bullet-item">
                        Initial discovery and review session.
                    </li>
                    <li class="table-bullet-item">
                        Definition of your context.
                    </li>
                    <li class="table-bullet-item">
                        Evaluation Of: systems, integrations, code, projects,
                        processes, governance model...
                    </li>
                    <li class="table-bullet-item">Audit results review.</li>
                    <li class="table-bullet-item">
                        Post review action plan with backlog creation.
                    </li>
                    <li class="table-bullet-item">Risk log creation​.</li>
                    <li class="table-bullet-item">Retrospective session.</li>
                </ul>
            </div>
        </StaticBulletContainer>
    </div>
    <div class="experience-column">
        <StaticBulletContainer title={"Implementation"}>
            <div>
                <ul>
                    <li class="table-bullet-item">Backlog delivery.</li>
                    <li class="table-bullet-item">Review of Risk log.</li>
                    <li class="table-bullet-item">
                        Restoration of your operation to the agreed state.
                    </li>
                    <li class="table-bullet-item">
                        Establishment of Support governance.
                    </li>
                    <li class="table-bullet-item">Retrospective session.</li>
                </ul>
            </div>
        </StaticBulletContainer>
    </div>
    <div class="experience-column">
        <StaticBulletContainer title={"Stabilization and Support"}>
            <div>
                <ul>
                    <li class="table-bullet-item">
                        Monitoring of implemented solution.
                    </li>
                    <li class="table-bullet-item">Introduction of SLAs.</li>
                    <li class="table-bullet-item">
                        Transition to Engineered Support model.
                    </li>
                    <li class="table-bullet-item">Retrospective session.</li>
                    <li class="table-bullet-item">
                        Regular Support and Maintenance.
                    </li>
                </ul>
            </div>
        </StaticBulletContainer>
    </div>
</div>

<style>
    .table-bullet-item {
        margin-bottom: 10px;
    }
    .experience-columns-container {
        display: flex;
        gap: 1rem;
        justify-content: center;
    }

    .experience-column {
        flex: 1;
        display: flex;
    }
</style>

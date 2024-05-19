<script>
import ElementPlusDialog from "../../utils/ElementPlus-dialog.vue";
import projectsList from "./projects-list.vue"
export default {
    name: 'projects-section',
    props: ['projects'],
    updated() {
        this.$store.commit({ type: 'setSectionRendered', section: 'projects', value: true })
    },
    components: {
        projectsList,
        ElementPlusDialog,
    }
}
</script>

<template>
    <section id="projects" class="main-container full">
        <div class="section">
            <h2 class="section-heading">Projects</h2>
            <projects-list :projects="projects" />
        </div>
        <ElementPlusDialog></ElementPlusDialog>
    </section>
</template>
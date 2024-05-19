<script>
import skillsList from "./skills-list.vue"
export default {
    name: 'skills-section',
    props: ['skills', 'section-rendered'],
    updated() {
        this.$store.commit({ type: 'setSectionRendered', section: 'skills', value: true })
    },
    components: {
        skillsList
    }
}

</script>

<template >
    <section id="skills" class="main-container full">
        <div class="section">
            <h2 class="section-heading">Skills</h2>
            <div class="skills-grid">
                <skills-list :skills="skills" />
            </div>
        </div>
    </section>
</template>
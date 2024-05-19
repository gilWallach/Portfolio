<script>
import toolsList from "./tools-list.vue"
export default {
    name: 'tools-section',
    props: ['tools'],
    updated() {
        this.$store.commit({ type: 'setSectionRendered', section: 'tools', value: true })
    },
    components: {
        toolsList
    }
}

</script>

<template >
    <section id="tools" class="main-container full">
        <div class="section">
            <h2 class="section-heading">Tools</h2>
            <div class="proton">
                <div class="electron"></div>
            </div>
        </div>
    </section>
</template>
<script>
import ElementPlusDialog from '../../utils/ElementPlus-dialog.vue'
// TODO: Add a computed function for shortText (is there a way with css only?)

export default {
    name: 'project-preview',
    props: ['project', 'idx'],
    methods: {
        onMoreInfo() {
            this.$store.commit({ type: 'setCurrProject', currProject: this.project })
        },
    },
    components: {
        ElementPlusDialog
    }
}
</script>

<template>
    <li class="card-wrapper" :class="{ right: idx % 2 }" @click="onMoreInfo">
        <div class="img-wrapper">
            <img :src="project.thumbnailUrl" />
        </div>
        <p class="short-description-p">{{ project.subHeading }}</p>
        <div class="content">
            <h5>
                <span class="stack-item tag" v-for="stackItem in project.stack">{{ stackItem }}</span>
            </h5>
        </div>
        <h4>{{ project.name }}</h4>

    </li>
</template>
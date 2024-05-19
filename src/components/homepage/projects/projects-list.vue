<script>
// TODO: Add logic for projects render
// TODO: make each card a link to the project page

import projectPreview from "./project-preview.vue"

export default {
    name: 'projects-list',
    props: ['projects'],
    components: {
        projectPreview,
    },
}
</script>

<template>
    <ul class="basic-grid projects-list-wrapper">
        <project-preview v-for="(project, idx) in projects" :key="project.id + '-preview'" :project="project" :idx="idx"/>
    </ul>
</template>
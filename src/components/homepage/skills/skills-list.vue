<script>
import skillItem from "./skill-item.vue"

export default {
    name: 'skills-list',
    props: ['skills'],
    components: {
        skillItem
    }
}
</script>

<template>
    <skill-item v-for="skill in skills" :skill="skill" :key="skill.id" />
</template>
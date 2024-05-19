<script>
import toolItem from "./tool-item.vue"

export default {
    name: 'tools-list',
    props: ['tools'],
    components: {
        toolItem
    }
}
</script>

<template>
    <tool-item v-for="tool in tools" :tool="tool" />
</template>
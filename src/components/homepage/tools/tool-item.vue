<script>
export default {
    name: 'tool-item',
    props: {
        tool: {
            id: String,
            name: String,
            description: String,
            iconName: String,
        }
    }
}
</script>

<template>
    <div class="tool-item-wrapper flex column">
        <div class="tool-logo-wrapper">
            <img :src="tool.imgUrl" />
        </div>
        <h3>{{ tool.name }}</h3>
    </div>
</template>
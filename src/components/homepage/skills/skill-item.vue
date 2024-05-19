<script>
export default {
    name: 'skill-item',
    props: ['skill']
}
</script>

<template>
    <div class="skill-item-wrapper flex column">
        <font-awesome-icon :icon="`fa-solid ${skill.iconName}`" style="font-size: 48px; color: #ab599d;"/>
        <h3>{{ skill.title }}</h3>
        <p>{{ skill.description }}</p>
        
    </div>
</template>
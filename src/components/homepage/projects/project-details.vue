<script>
export default {
    name: 'project-details',
    props:['currProject'],
    
}
</script>

<template>
    <section v-if="currProject" class="main-container" id="project-details-section">
        <div class="heading-wrapper">
            <h1 class="page-heading">{{ currProject.name }}</h1>
            <h2 class="page-subheading">{{ currProject.generalDescription }}</h2>
        </div>
        <div class="info-wrapper">
            <h5 class="stack-wrapper">
                <span class="stack-item tag" v-for="(stackItem, idx) in currProject.stack"
                    :class="{ right: idx >= currProject.stack.length / 2 }">{{
                        stackItem }}</span>
            </h5>
            <span style="white-space: pre-wrap;">{{ currProject.techDescription }}</span>
        </div>
            <a :href="currProject.link" target="_blank">Check out the project</a>
        <!-- <div class="gallery-wrapper">
            <div v-for="(imgUrl, idx) in currProject.imgUrls" class="img-container" :class="{ right: idx % 2 }">
                <img :src="imgUrl">
            </div>
        </div> -->
    </section>
</template>
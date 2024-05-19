<script>
import toolItem from "./tools/tools-list.vue"

export default {
    name: 'fold',
    props: ['tools'],
    mounted() {
        this.$store.commit({ type: 'setSectionRendered', section: 'fold', value: true })
    },
    components: {
        toolItem
    }
}
</script>

<template>
    <section id="fold">
        <div class="content">
            <div class="flex about-wrapper">
                <div class="details-wrapper">
                    <div class="profile-pic-wrapper">
                        <img src="https://res.cloudinary.com/dmfzwepkf/image/upload/v1712083084/Gil_hltsmn.jpg"
                            alt="profile picture">
                    </div>
                </div>
                <div class="content about-p">
                    <p>
                        I’m Gil, a full stack developer, just came back to Israel, with my husband and our dogs, after two years in Greece.
                    </p>
                    <p>
                        I love detailed design and animation, and at the same time, I enjoy solving logical
                        problems and creating APIs for the backend.
                    </p>
                    <p>I always try to deepen my knowledge & experience by getting into the small details, as well as understanding the bigger picture & the context of my work.
                    </p>
                </div>
            </div>
        </div>
        <div class="logos-slide-wrapper">
            <div class="logos-slide">
                <img v-for="tool in tools" :src="tool.imgUrl" :alt="tool.name">
            </div>
            <div class="logos-slide">
                <img v-for="tool in tools" :src="tool.imgUrl" :alt="tool.name">
            </div>
        </div>
    </section>
</template>
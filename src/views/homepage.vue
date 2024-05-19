<script>
import foldSection from "../components/homepage/foldSection.vue"
import projectsSection from "../components/homepage/projects/projects-section.vue"
import skillsSection from "../components/homepage/skills/skills-section.vue"
import contactSection from "../components/homepage/contactSection.vue"

export default {
    name: 'homepage',
    data() {
        return {
            firstRender: true,
        }
    },
    created() {
        this.$store.dispatch('loadProjects')
        this.$store.dispatch('loadSkills')
        this.$store.dispatch('loadTools')

        this.$store.commit({ type: 'setActiveTab', activeTab: this.$route.path.slice(1) })
    },
    mounted() {
        setTimeout(() => {
            const targetElement = document.getElementById('fold')
            targetElement.classList.add('animate')
        }, 100)

    },
    updated() {
        this.$store.commit({ type: 'setActiveTab', activeTab: this.$route.path.slice(1) })
        if (this.firstRender &&
            this.sectionsRendered.fold === true &&
            this.sectionsRendered.projects === true &&
            this.sectionsRendered.skills === true) {
                this.firstRender = false
                this.scrollToSection(this.activeTab)
        }
    },
    computed: {
        sectionsRendered() {
            return this.$store.getters.sectionsRendered
        },
        activeTab() {
            return this.$store.getters.activeTab
        },
        projects() {
            return this.$store.getters.projects
        },
        skills() {
            return this.$store.getters.skills
        },
        tools() {
            return this.$store.getters.tools
        },
    },
    methods: {
        scrollToSection(section) {
            if (section === 'home') section = 'fold'
            const targetElement = document.getElementById(section)

            if (targetElement) {
                const targetElementPosition = targetElement.getBoundingClientRect().top + window.scrollY
                const offset = targetElementPosition - 160

                window.scrollTo({
                    top: offset,
                    behavior: 'smooth',
                })
            } else {
                console.warn(`Target element with ID '${section}' not found`)
            }
        },
    },
    watch: {
        // $route(to, from) {
        //     if (!to.path.includes('project-details')) {
        //         this.$store.commit({ type: 'setActiveTab', activeTab: to.path.slice(1) })
        //         // this.scrollToSection(to.path.slice(1))
        //     }
        // },
    },
    components: {
        foldSection,
        projectsSection,
        skillsSection,
        contactSection
    }
}
</script>

<template>
    <fold-section :tools="tools" />
    <projects-section :projects="projects" />
    <skills-section :skills="skills" />
    <contact-section />
</template>
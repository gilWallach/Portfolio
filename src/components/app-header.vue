<script>
import { debounce } from 'lodash'

export default {
    data() {
        return {
            navBgcTriggerPoint: window.innerHeight / 10,
        }
    },
    mounted() {
        window.addEventListener('scroll', debounce(this.updateScrollPosition, 100))
        window.addEventListener('scroll', debounce(this.handleActiveTab, 10))
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.updateScrollPosition)
        window.removeEventListener('scroll', this.handleActiveTab)
    },
    computed: {
        scrollPosition() {
            return this.$store.getters.scrollPosition
        },
        activeTab() {
            return this.$store.getters.activeTab
        },
    },
    methods: {
        scrollToSection(section) {
            if (section === 'home') section = 'fold'
            const targetElement = document.getElementById(section)

            if (targetElement) {
                const targetElementPosition = targetElement.getBoundingClientRect().top + window.scrollY
                const offset = targetElementPosition - 80

                window.scrollTo({
                    top: offset,
                    behavior: 'smooth',
                })
            } else {
                console.warn(`Target element with ID '${section}' not found`)
            }
        },
        updateScrollPosition() {
            this.$store.commit({ type: 'scrollPosition', scrollPosition: window.scrollY })
        },
        handleActiveTab() {
            const sections = ['fold', 'projects', 'skills', 'contact']

            for (const section of sections) {
                const sectionElement = document.getElementById(section)

                if (sectionElement && this.activeTab !== section) {
                    const rect = sectionElement.getBoundingClientRect()
                    const isVisible = rect.top <= window.innerHeight * 0.75 && rect.bottom >= window.innerHeight / 2

                    if (isVisible) {
                        this.$store.commit({ type: 'setActiveTab', activeTab: section })
                        
                        sectionElement.classList.add('animate')
                    } else sectionElement.classList.remove('animate')
                }
            }
        },
    },
    watch: {
        $route(to, from) {
            if (to.path.slice(1).length !== 0) {
                this.$store.commit({ type: 'setActiveTab', activeTab: to.path.slice(1) })
                this.scrollToSection(to.path.slice(1))
            }
        },
    },
}
</script>

<template>
    <header class="header-wrapper main-container full" :class="{ scrolled: scrollPosition > navBgcTriggerPoint }">
        <div class="header-sub-wrapper flex align-center">
            <router-link to="/home" class="logo-wrapper">
                <h1 class="logo-txt">Gil.W</h1>
                <p class="logo-desc" :class="{ animate: scrollPosition > navBgcTriggerPoint }">
                    Full Stack
                    Dev</p>
            </router-link>

            <div class="flex-grow-1" />

            <div class="nav-wrapper flex align-center">
                <router-link to="/projects" :class="{ active: activeTab === 'projects' }"
                    class="nav-item">Projects</router-link>
                <router-link to="/skills" :class="{ active: activeTab === 'skills' }"
                    class="nav-item">Skills</router-link>
                <router-link to="/contact" :class="{ active: activeTab === 'contact' }"
                    class="nav-item">Contact</router-link>
            </div>
        </div>
        <div class="full divider" :class="{ animate: scrollPosition > navBgcTriggerPoint }"></div>
    </header>
</template>
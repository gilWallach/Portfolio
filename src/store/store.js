import { createStore } from 'vuex'
import { contentStore } from './content.store.js'

export const store = createStore({
    strict: true,
    modules: {
        contentStore,
    },
    state: {
        activeTab: null,
        scrollPosition: null,
        sectionsRendered: {
            'fold': false,
            'projects': false,
            'skills': false,
            'contact': false,
        },
        currProject: false,
    },
    getters: {
        activeTab({ activeTab }) {
            return activeTab
        },
        scrollPosition({ scrollPosition }) {
            return scrollPosition
        },
        sectionsRendered({ sectionsRendered }) {
            return sectionsRendered
        },
        currProject({currProject}) {
            return currProject
        }
    },
    mutations: {
        setSectionRendered(state, { section, value }) {
            state.sectionsRendered[section] = value
        },
        setActiveTab(state, { activeTab }) {
            state.activeTab = activeTab
        },
        scrollPosition(state, { scrollPosition }) {
            state.scrollPosition = scrollPosition
        },
        setCurrProject(state, {currProject}) {
            state.currProject = currProject
        }
    },
})
import { projectService } from "../services/project-service"
import { skillService } from "../services/skill-service"
import { toolService } from "../services/tool-service"

export const contentStore = {
    state: {
        projects: [],
        skills: [],
        tools: []
    },
    getters: {
        projects({ projects }) {
            return projects
        },
        skills({ skills }) {
            return skills
        },
        tools({ tools }) {
            return tools
        },
    },
    mutations: {
        setProjects(state, { projects }) {
            state.projects = projects
          },
        setSkills(state, { skills }) {
            state.skills = skills
          },
        setTools(state, { tools }) {
            state.tools = tools
          },
    },
    actions: {
        async loadProjects(context) {
            try {
                const projects = await projectService.query()
                context.commit({ type: 'setProjects', projects })
            } catch (err) {
                console.log('contentStore: Error in loadProjects', err)
                throw err
            }
        },
        async loadSkills(context) {
            try {
                const skills = await skillService.query()
                context.commit({ type: 'setSkills', skills })
            } catch (err) {
                console.log('contentStore: Error in loadSkills', err)
                throw err
            }
        },
        async loadTools(context) {
            try {
                const tools = await toolService.query()
                context.commit({ type: 'setTools', tools })
            } catch (err) {
                console.log('contentStore: Error in loadTools', err)
                throw err
            }
        },
    }
}
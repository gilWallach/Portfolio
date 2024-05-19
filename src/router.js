import { createRouter, createWebHashHistory } from "vue-router";

import homepage from "./views/homepage.vue"
import fold from "./components/homepage/foldSection.vue"
import projects from "./components/homepage/projects/projects-section.vue"
import skills from "./components/homepage/skills/skills-section.vue"
import contact from "./components/homepage/contactSection.vue"

const routes = [
  {
    path: '/',
    component: homepage,
    meta: {
      activeSection: 'home',
    },
    children: [
      {
        path: 'home',
        component: fold,
      },
      {
        path: 'projects',
        component: projects,
      },
      {
        path: 'skills',
        component: skills,
      },
      {
        path: 'contact',
        component: contact,
      },
    ],
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  // base: process.env.BASE_URL,
})
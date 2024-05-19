import { createApp } from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, faCubesStacked, faCodeCompare, faIndent, faArrowsRotate, faNetworkWired, faDesktop } from '@fortawesome/free-solid-svg-icons'

import ElementPlus from 'element-plus'

import './assets/scss/setup/_typography.scss'
import './assets/scss/main.scss'
import 'element-plus/dist/index.css'

import rootCmp from './root-cmp.vue'
import {router} from "./router"

import { store } from './store/store.js'

// fa config
library.add(faUserSecret, faCubesStacked, faCodeCompare, faIndent, faArrowsRotate, faNetworkWired, faDesktop)


const app = createApp(rootCmp)
.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(store)
app.use(ElementPlus)

app.mount('#app')
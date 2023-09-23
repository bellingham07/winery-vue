import { createRouter, createWebHashHistory } from 'vue-router'
import { constanRoutes } from './routers'

let router = createRouter({
    history: createWebHashHistory(),
    router: constanRoutes,
})

export default router
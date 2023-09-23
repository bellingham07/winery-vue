import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'

//引入路由
import router from './router/index'
import { zhCn } from 'element-plus/es/locale'

const app = createApp(App)

app.use(router)
app.use(ElementPlus, {
    locale: zhCn
})
app.mount('#app')

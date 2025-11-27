import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const app = createApp(App)

const pinia = createPinia()

// 开启持久化（localStorage）
pinia.use(piniaPluginPersistedstate)

// 先挂载路由
app.use(router)

// 再挂载 Element Plus（带中文配置）
app.use(ElementPlus, {
  locale: zhCn
})

app.use(pinia)

app.mount('#app')

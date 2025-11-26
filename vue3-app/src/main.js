import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn.mjs'

const app = createApp(App)

// 先挂载路由
app.use(router)

// 再挂载 Element Plus（带中文配置）
app.use(ElementPlus, {
  locale: zhCn
})

app.mount('#app')

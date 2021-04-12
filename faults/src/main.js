import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import store from './store'
import router from './router/index'
import '@/assets/styles/application.scss'

const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000, locale })
app.use(store)
app.use(router)
app.mount('#app')

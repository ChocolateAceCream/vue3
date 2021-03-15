import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import store from './store'

const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000, locale })
app.use(store)
app.mount('#app')

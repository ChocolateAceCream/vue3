import { createApp } from 'vue'

import App from './App.vue'
import App2 from './App2.vue'

createApp(App).mount('#app')

const app2Mixin = {
  created() {
    console.log('app 2 created')
  },
  mounted() {
    console.log('app 2 mounted')
  }
}

const app2 = createApp(App2, {mixins: [app2Mixin]})
// app2.mixin({...app2Mixin}) 
app2.mount('#app2')


import { createApp } from 'vue'

import App from './App.vue'
import App2 from './App2.vue'
import App3 from './App3.vue'

import i18nPlugin  from './plugins/i18n'
createApp(App).mount('#app')

const app2Mixin = {
  custom: 'app 2!',
  created() {
    console.log('app 2 created')
  },
  mounted() {
    console.log('app 2 mounted')
  }
}

const app3Mixin = {
  custom: 'app 3!',
  created() {
    console.log('app 3 created')
  },
  mounted() {
    console.log('app 3 mounted')
  }
}



const app2 = createApp(App2)

//merging strategies
app2.config.optionMergeStrategies.custom = (toVal, fromVal) => {
  console.log('from', fromVal)
  console.log('toVal', toVal)
  // => "goodbye!", undefined
  // => "hello", "goodbye!"
  return fromVal || toVal
}

//inject global mixin, which will affect all child components
app2.mixin({...app2Mixin}) 
app2.mixin({...app3Mixin}) 
app2.mixin({
  custom: 'goodbye!',
  created() {
    console.log(this.$options.custom) // => "hello!"
    console.log('process', this.process)
    console.log('VITE_APP_CONTEXT',import.meta.env.VITE_APP_CONTEXT)
    console.log('env var VITE_PORT', import.meta.env.VITE_PORT) //example usage of ENVIRONMENT VARIABLES
}
})

//use plugin
const i18nStrings = {
  greetings: {
    hi: 'Hallo!'
  }
}

app2.use(i18nPlugin ,i18nStrings)
app2.mount('#app2')


const app3 = createApp(App3)

app3.mount('#app3')


const req = require.context('./mapJson', false, /\.json$/)
const requireAll = (requireContext) => {
  requireContext.keys().map(requireContext)
  console.log(requireContext)
}
requireAll(req)
console.log('----a----------')




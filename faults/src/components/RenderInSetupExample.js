import { h, resolveComponent, resolveDirective, withDirectives,reactive } from 'vue'
export default {
  setup() {
    const state = reactive({count:0})
    function increment() {
      state.count++
    }
    return () => {
      return h('div', {onClick: increment}, state.count)
    }
  }
}

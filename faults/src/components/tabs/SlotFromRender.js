import { h, onMounted, resolveComponent, resolveDirective, withDirectives, reactive } from 'vue'
export default {
  setup(props, context) {
    onMounted(() => {
      console.log(context.slots)
    })
    return () => {
      h('div', {}, [
        h('div', context.slots, 'aaaaaaaaaaaaaaaa')
      ])
    }
  }
}

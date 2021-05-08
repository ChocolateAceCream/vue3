<script>

import { h, resolveComponent, resolveDirective, withDirectives } from 'vue'
import SlotFromRender from '@/components/tabs/SlotFromRender.js'
export default {
  components: {SlotFromRender},
  mounted(){
    console.log(this.$slots)
  },
  render() {
    return h('div', {}, [
      'some text come first',
      h('h1', 'a hdeadline'),
      h(SlotFromRender)
    ])

    // return h('div',
    //   Array.from({ length: 20 }).map(() => {
    //     return h('p', 'hi')
    //   })
    // )

  }
}
</script>

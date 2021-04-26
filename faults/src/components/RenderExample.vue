<script>

import { h, resolveComponent, resolveDirective, withDirectives } from 'vue'
import Home from '@/components/tabs/HomeTab.vue'
export default {
  components: {Home},
  render() {
    return h('div', {}, [
      'some text come first',
      h('h1', 'a hdeadline'),
      h(Home)
    ])

    // return h('div',
    //   Array.from({ length: 20 }).map(() => {
    //     return h('p', 'hi')
    //   })
    // )

  }
}
</script>

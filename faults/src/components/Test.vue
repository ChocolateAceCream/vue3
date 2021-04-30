

<script>
import { h, onMounted, ref } from 'vue'

export default {
  name: 'Test',
  // emits: {
  //   title: (title) => {
  //     console.log('title', title)
  //     if (title % 2) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   }
  // },
  props: ['title'],
  emits: ['update:title'],
  setup(props,context) {
    let a = 1
    function handleClick(event) {
      context.emit('update:title', a++)
      event.preventDefault()

    }
    return () => {
      return h('button', {onClick: event => handleClick(event)}, props.title)
    }

  },
}
</script>

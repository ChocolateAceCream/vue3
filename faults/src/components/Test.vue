<template>
  <button @click.prevent="handleClick">click me</button>
</template>


<script>
import { onMounted, ref } from 'vue'

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
  emits: ['update:title'],
  setup(props,context) {
    let a = 1
    function handleClick() {
      context.emit('update:title', a++)
    }
    return {
      handleClick
    }

  },
}
</script>

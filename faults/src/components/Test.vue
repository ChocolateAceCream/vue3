<template>
  <button @click.prevent="handleClick">click me</button>
  <div>
    <div v-for="todo in todos" :key="todo.id" data-test="todo">
      {{ todo.text }}
    </div>
  </div>
</template>


<script>
import { onMounted, ref } from 'vue'

export default {
  name: 'Test',
  emits: {
    title: (title) => {
      console.log('title', title)
      if (title % 2) {
        return true
      } else {
        return false
      }
    }
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          text: 'Learn Vue.js 3',
          completed: false
        }
      ]
    }
  },
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

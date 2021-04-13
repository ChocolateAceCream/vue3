<template>
  <h1>{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <Test v-model:title="msg"></Test>

</template>



<script>
import { onMounted, ref } from 'vue'
import Test from '@/components/Test.vue'
import { defineProps, reactive } from 'vue'

export default {
  name: 'HelloWorld',
  components: {
    Test
  },
  setup() {
    let msg = ref('title')
    const state = reactive({ count: 0 })

    return {
      msg,
      state,
    }
  },

}
</script>


<style scoped>
a {
  color: #42b983;
}
</style>

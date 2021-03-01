<template>
  <div>
    <h1>child component example</h1>
    <h1>{{ state.count }}</h1>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script setup>
import { defineProps, reactive, ref } from 'vue'

defineProps({
  msg: Number
})

const state = reactive({ count: 0 })
// const state2 = ref({ count: 0 })
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
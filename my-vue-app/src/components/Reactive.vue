<template>
  <div>
    <h1>child component example</h1>
    <h1 @click="state.count++">{{ state.count }}</h1>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script setup>
import { defineProps, reactive, ref, useContext } from 'vue'

const props = defineProps({
  msg: Number
})

console.log('useContext', useContext)
console.log('useContext', useContext.attrs)

const state = reactive
const init = async() => {
  console.log('-----props.msg--------', props.msg)
}
// const state2 = ref({ count: 0 })

init()
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
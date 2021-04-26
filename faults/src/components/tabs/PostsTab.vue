<template>
    <div class="post" @click="handleClick">Posts
      <async-component-example v-if="state.showDetails" />
      <!-- <span v-if="showDetails">asdf asdf asdfasd fasdf asdf asdfasdf </span> -->
      <li>111</li>
      <li>22</li>
      <tr>33</tr>
      <tr>55</tr>
      <option>56 </option>
      <option>44</option>
    </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
import { reactive, computed, ref, provide } from 'vue'

export default {
  data() {
    return {
      fontColor: 'red',
      showDetails: false,
      bg: {
        color: 'pink'
      }
    }
  },
  computed: {
    fontSize() {
      return '24px'
    }
  },
  components: {
    AsyncComponentExample: defineAsyncComponent(() => import('./AsyncComponentExample.vue'))
  },
  setup() {
    const state = reactive({
      color: 'green',
      showDetails: false,

    })
    let bgColor = ref('blue')

    function handleClick() {
      console.log('--------clicked-------')
      state.color = state.showDetails ? 'red' : 'green'
      state.showDetails = !state.showDetails
      console.log('--------state.color.colorked-------',state.color)
    }
    return {
      state,
      handleClick,
      bgColor
    }
  }
}
</script>

<style>
.post {
  color: v-bind('fontColor');
  background-color: v-bind('bg.color');
  font-size: v-bind('fontSize');
}
</style>

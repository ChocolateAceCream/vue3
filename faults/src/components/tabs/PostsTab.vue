<template>
    <div @click="showDetails=!showDetails">Posts
      <async-component-example v-if="showDetails" />
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

export default {
  data() {
    return {
      showDetails: false
    }
  },
  components: {
    AsyncComponentExample: defineAsyncComponent(() => import('./AsyncComponentExample.vue'))
  }
}
</script>

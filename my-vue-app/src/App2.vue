<template>
  <h1>hey {{}}</h1>
</template>


<script>
import { provide } from 'vue'
export default {
  name: 'App2',
  inject: ['i18n'],
  computed: {
    translate() {
      return this.$translate
    }
  }
}
</script>
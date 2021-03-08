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
  },
  mounted() {
    const params = new URLSearchParams(window.location.search)

    params.set('id2','kkk')
    console.log('window.location',window.location)
    console.log('URLSearchParams get', params.get('id'))
    console.log('URLSearchParams getAll', params.getAll('id'))
    console.log('all keys',[...params.entries()])


  }
}
</script>
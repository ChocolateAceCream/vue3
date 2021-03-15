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
    let a = {a:1, b:2, c:3}
    let b = {...a, b:23}
    console.log('destrucor-----------------------',Object.entries({a: 1, b: 2, c: 3}))
    let add=(x,y)=>x+y;
    const n1=100,n2=200;
    var result=add(n1,n2);
    console.log(result);
    const params = new URLSearchParams(window.location.search)
    params.set('id2','kkk')
    console.log('window.location',window.location)
    console.log('URLSearchParams get', params.get('id'))
    console.log('URLSearchParams getAll', params.getAll('id'))
    console.log('all keys',[...params.entries()])


  }
}
</script>
<template>
  <div @click="onClick">current instance</div>
  <span> {{state.count}}{{state.double}} </span>
  <Modal />
</template>

<script>
import { defineProps, reactive, ref, useContext,computed } from 'vue'
import { useCount } from '../hooks/useCount.js'
import Modal from './Modal.vue'
export default {
  name: 'CurrentInstance',
  components: {
    Modal
  },
  
  /* if not using hooks
  setup(props, context){
    const state = reactive({
      count: 0,
      double: computed(() => state.count * 2)
    })
    console.log('----------context---------------')
    console.log(context.attrs)
    console.log(context.slots)
    console.log(context.emit)

    function onClick() {
      state.count++ 
    }
    return {state, onClick}
  }
  */

  //using hooks
  setup(props, context) {
    let {state, onClick} = useCount()
    return {state, onClick}
  }

}
</script>
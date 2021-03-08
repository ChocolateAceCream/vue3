import {
  reactive,
  computed
} from 'vue'

export function useCount() {
  const state = reactive({
    count: 0,
    double: computed(() => state.count * 2)
  })

  function onClick() {
    state.count++ 
  }
  return {state, onClick}
}
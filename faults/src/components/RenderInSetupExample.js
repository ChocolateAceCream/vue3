import { h, onMounted, resolveComponent, resolveDirective, withDirectives,reactive } from 'vue'
export default {
  //this render function will be override by the one from setup()
  render() {
    return h('div', {}, [
      'some text come first',
      h('h1', 'a hdeadline')
    ])
  },
  setup(props, context) {
    const state = reactive({
      count: 0,
      arr: []
    })
    function increment() {
      state.count++
      state.arr.push(h('p', {}, state.count))
    }
    return () => {
      if (state.count % 2 == 0) {
        return h('div', { onClick: increment}, [
          props.modelValue,
          state.count,
          h('div', { style: { display: "flex" } }, [...state.arr])
        ])
      } else {
        return h('div', { onClick: increment }, 'odd number')
      }
    }
  }
}

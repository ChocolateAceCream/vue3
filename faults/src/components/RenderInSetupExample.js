import { h, resolveComponent, resolveDirective, withDirectives,reactive } from 'vue'
export default {
  //this render function will be override by the one from setup()
  render() {
    return h('div', {}, [
      'some text come first',
      h('h1', 'a hdeadline')
    ])

    // return h('div',
    //   Array.from({ length: 20 }).map(() => {
    //     return h('p', 'hi')
    //   })
    // )

  },
  setup() {
    const state = reactive({
      count: 0,
      arr: []
    })
    function increment() {
      state.count++
      state.arr.push(h('p', {}, state.count))
    }
    return () => {
      return h('div', { onClick: increment }, [
        state.count,
        h('div', { style: { display: "flex" } }, [...state.arr])
      ])
    }
  }
}

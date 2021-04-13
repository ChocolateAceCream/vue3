import { mount } from '@vue/test-utils'
import UnitTestExample from '@/components/UnitTestExample.vue'

test('test Test component', () => {
  const wrapper = mount(UnitTestExample)
  const todo = wrapper.get('[data-test="todo"]')

  expect(todo.text()).toBe('Learn Vue.js 3')
})

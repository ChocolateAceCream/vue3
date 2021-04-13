import { mount } from '@vue/test-utils'
import Test from '@/components/Test.vue'

test('emits and event when clicked', () => {
  const wrapper = mount(Test)

  wrapper.find('button').trigger('click')
  expect(wrapper.emitted()).toHaveProperty('update:title')
})

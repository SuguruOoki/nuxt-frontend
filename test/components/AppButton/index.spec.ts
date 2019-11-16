import { shallowMount } from '@vue/test-utils'
import AppButton from '~/components/AppButton/index.vue'

describe('AppButton', () => {
  test('is a Vue instance', () => {
    const wrapper = shallowMount(AppButton)
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  test('has a default "type" props', () => {
    const wrapper = shallowMount(AppButton)
    expect(wrapper.props().type).toBe('primary')
  })

  test('can set type props to "secondary"', () => {
    const wrapper = shallowMount(AppButton, { propsData: { type: 'secondary' } })
    expect(wrapper.props().type).toBe('secondary')
  })

  test('can only set string allowed for "type" props', () => {
    const spy = jest.spyOn(console, 'error')
    shallowMount(AppButton, { propsData: { type: 'hoge' } })
    expect(spy).toBeCalledWith(expect.stringContaining('[Vue warn]: Invalid prop'))
    spy.mockReset()
  })

  test('has a disabled props', () => {
    const wrapper = shallowMount(AppButton, { propsData: { disabled: true } })
    expect(wrapper.props().disabled).toBe(true)
  })
})

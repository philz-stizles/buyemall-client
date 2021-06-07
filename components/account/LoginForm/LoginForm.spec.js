import { shallow } from 'enzyme'
import React from 'react'
import LoginForm from './LoginForm'
// import LineInput from './../../ui/inputs/LineInput/LineInput'

describe('<LoginForm />', () => {
  let wrapper
  const mockSetLoginForm = jest.fn()
  const mockInitLoginFormState = { email: '', password: '' }
  React.useState = jest.fn(() => [mockInitLoginFormState, mockSetLoginForm])

  beforeEach(() => {
    wrapper = shallow(<LoginForm />)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should  render without errors', () => {})

  it('does not throw warning with expected props', () => {})

  describe('state controlled input field', () => {
    it('form state updates with value of input upon change', () => {
      // console.log(wrapper.debug())
      const mockEvent = {
        target: { value: 'logrocket@mail.com' }
      }
      wrapper.find('input[type="email"]').simulate('change', mockEvent)
      expect(mockSetLoginForm).toHaveBeenCalledTimes(1)
    })

    it('form state updates with value of input upon change', () => {
      const mockEvent = {
        target: { name: 'email', value: 'logrocket@mail.com' }
      }
      wrapper.find('input[type="email"]').simulate('change', mockEvent)
      expect(mockSetLoginForm).toHaveBeenCalledWith({
        ...mockInitLoginFormState,
        [mockEvent.target.name]: mockEvent.target.value
      })
    })
  })
})

import { mount } from 'enzyme'
import React from 'react'
import RegisterForm from './RegisterForm'
// import LineInput from './../../ui/inputs/LineInput/LineInput'

describe('<RegisterForm />', () => {
  let wrapper
  let mockSetRegisterForm = jest.fn()
  const mockInitRegisterFormState = { email: '', password: '' }

  beforeEach(() => {
    mockSetRegisterForm.mockClear()
    React.useState = jest.fn(() => [mockInitRegisterFormState, mockSetRegisterForm])
    wrapper = mount(<RegisterForm />)
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
      expect(mockSetRegisterForm).toHaveBeenCalledTimes(1)
    })

    it('form state updates with value of input upon change', () => {
      const mockEvent = {
        target: { name: 'email', value: 'logrocket@mail.com' }
      }
      wrapper.find('input[type="email"]').simulate('change', mockEvent)
      expect(mockSetRegisterForm).toHaveBeenCalledWith({
        ...mockInitRegisterFormState,
        [mockEvent.target.name]: mockEvent.target.value
      })
    })
  })
})

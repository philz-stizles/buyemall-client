import React, { useRef, useState } from 'react'
import ModalWrapper from '../modals/ModalWrapper'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { closeModal } from '../../../store/redux/modal/modalActions'
import SquareButton from '../buttons/SquareButton/SquareButton'
import SolidInput from '../inputs/SolidInput/SolidInput'
import { createCategory, updateCategory } from '../../../actions/category'

const CreateForm = ({ onComplete, initialData }) => {
  const [formState, setFormState] = useState({
    name: initialData ? initialData.name : '',
    description: initialData ? initialData.description : ''
  })
  const { name, description } = formState
  const [isSubmitting, setSubmitting] = useState(false)
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormState({
      ...formState,
      [name]: value
    })
  }

  const submitForm = async (e) => {
    e.preventDefault()
    try {
      const formBody = {
        ...formState
      }
      console.log(formBody)
      const response = await (initialData
        ? updateCategory(initialData.slug, formBody)
        : createCategory(formBody))
      console.log(response.data)
      setSubmitting(false)
      dispatch(closeModal())
      onComplete()
    } catch (error) {
      setSubmitting(false)
      console.log(error.message)
    }
  }

  return (
    <ModalWrapper size="mini" header={initialData ? 'Update category' : 'Create category'}>
      <form onSubmit={submitForm}>
        <SolidInput
          id="c-name"
          name="name"
          value={name}
          onChange={handleInputChange}
          type="text"
          required
          placeholder="Name"
        />
        <SolidInput
          id="c-description"
          name="description"
          value={description}
          type="textarea"
          rows="3"
          onChange={handleInputChange}
          placeholder="Description"
        />
        <SquareButton loading={isSubmitting} expanded>
          {initialData ? 'Update' : 'Create'}
        </SquareButton>
      </form>
    </ModalWrapper>
  )
}

CreateForm.propTypes = {
  initialData: PropTypes.object,
  onComplete: PropTypes.func
}

export default CreateForm

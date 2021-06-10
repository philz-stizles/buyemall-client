import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import ModalWrapper from '../../../ui/modals/ModalWrapper'
import { closeModal } from '../../../../store/redux/modal/modalActions'
import SquareButton from '../../../ui/buttons/SquareButton/SquareButton'
import SolidInput from '../../../ui/inputs/SolidInput/SolidInput'
import { createSubCategory, updateSubCategory } from '../../../../actions/subCategory'
import SelectInput from '../../../ui/inputs/SelectInput/SelectInput'

const SubCategoryForm = ({ onComplete, initialData, categories }) => {
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
        ? updateSubCategory(initialData.slug, formBody)
        : createSubCategory(formBody))
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
    <ModalWrapper size="mini" header={initialData ? 'Update sub-category' : 'Create sub-category'}>
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
        <SelectInput options={categories} />
        <SquareButton loading={isSubmitting} expanded>
          {initialData ? 'Update' : 'Create'}
        </SquareButton>
      </form>
    </ModalWrapper>
  )
}

SubCategoryForm.propTypes = {
  initialData: PropTypes.object,
  onComplete: PropTypes.func,
  categories: PropTypes.array.isRequired
}

export default SubCategoryForm

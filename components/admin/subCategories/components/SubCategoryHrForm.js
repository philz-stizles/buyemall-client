import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { closeModal } from '../../../../store/redux/modal/modalActions'
import SquareButton from '../../../ui/buttons/SquareButton/SquareButton'
import { createSubCategory, updateSubCategory } from '../../../../actions/subCategory'
import SelectInput from '../../../ui/inputs/SelectInput/SelectInput'
import LineInput from '../../../ui/inputs/LineInput/LineInput'

const SubCategoryHrForm = ({ onComplete, initialData, categories }) => {
  const [formState, setFormState] = useState({
    name: initialData ? initialData.name : '',
    description: initialData ? initialData.description : '',
    category: ''
  })
  const { name, description, category } = formState
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
    <form onSubmit={submitForm} className="SubCategoryHrForm">
      <LineInput
        id="scf-name"
        type="text"
        label="Name"
        required
        name="name"
        value={name}
        onChange={handleInputChange}
        placeholder="Name of sub-category"
      />
      <LineInput
        id="scf-description"
        type="text"
        label="Description"
        name="description"
        value={description}
        onChange={handleInputChange}
        placeholder="Describe of sub-category"
      />
      <SelectInput
        label="select a parent category"
        name="category"
        value={category}
        onChange={handleInputChange}
        options={categories}
      />
      <SquareButton borderColor="#738297" bgColor="transparent" color="#fff">
        New Sub-category
      </SquareButton>
      <style jsx>{`
        .SubCategoryHrForm {
          display: grid;
          grid-column-gap: 3rem;
          grid-template-columns: repeat(3, 32rem) min-content;
          align-items: baseline;
        }
      `}</style>
    </form>
  )
}

SubCategoryHrForm.propTypes = {
  initialData: PropTypes.object,
  onComplete: PropTypes.func,
  categories: PropTypes.array.isRequired
}

export default SubCategoryHrForm

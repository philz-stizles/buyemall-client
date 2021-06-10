import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import LineInput from '../../../ui/inputs/LineInput/LineInput'
import SelectInput from '../../../ui/inputs/SelectInput/SelectInput'
import { useDispatch } from 'react-redux'
import SquareButton from '../../../ui/buttons/SquareButton/SquareButton'
import { createProduct, updateProduct } from '../../../../actions/product'
import { getCategories } from '../../../../actions/category'

const ProductCreate = ({ initialData }) => {
  const [formState, setFormState] = useState({
    name: initialData ? initialData.name : '',
    description: initialData ? initialData.description : '',
    category: ''
  })
  const { name, description, category } = formState
  const [categories, setCategories] = useState([])
  const [isSubmitting, setSubmitting] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    loadCategories()
  }, [])

  const loadCategories = async () => {
    try {
      const response = await getCategories()
      console.log(response.data)
      setCategories(response.data.data)
    } catch (error) {
      console.log(error.message)
    }
  }

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
        ? updateProduct(initialData.slug, formBody)
        : createProduct(formBody))
      console.log(response.data)
      setSubmitting(false)
    } catch (error) {
      setSubmitting(false)
      console.log(error.message)
    }
  }
  return (
    <form onSubmit={submitForm}>
      <div className="ProductCreate">
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

        <LineInput
          id="scf-description"
          type="text"
          label="Description"
          name="description"
          value={description}
          onChange={handleInputChange}
          placeholder="Describe of sub-category"
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
      </div>
      <SquareButton borderColor="#738297" bgColor="transparent" color="#fff">
        New Sub-category
      </SquareButton>
      <style jsx>{`
        .ProductCreate {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 3rem;
          margin-bottom: 3rem;
        }
      `}</style>
    </form>
  )
}

ProductCreate.propTypes = {
  initialData: PropTypes.object
}

export default ProductCreate

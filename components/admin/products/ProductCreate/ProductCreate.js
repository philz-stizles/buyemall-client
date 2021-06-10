import React, { Fragment, useEffect, useState } from 'react'
import Resizer from 'react-image-file-resizer'
import PropTypes from 'prop-types'
import LineInput from '../../../ui/inputs/LineInput/LineInput'
import SelectInput from '../../../ui/inputs/SelectInput/SelectInput'
import SquareButton from '../../../ui/buttons/SquareButton/SquareButton'
import { createProduct, removeImage, updateProduct, upload } from '../../../../actions/product'
import { getCategories, getCategorySubs } from '../../../../actions/category'
import TitleWithIcon from '../../../ui/titles/TitleWithIcon'
import Badge from '../../../ui/Badge/Badge'
import Avatar from '../../../ui/Avatar/Avatar'

const ProductCreate = ({ initialData }) => {
  const [formState, setFormState] = useState({
    title: 'Macbook Pro',
    description: 'This is the best Apple product',
    price: '45000',
    category: '',
    subCategories: [],
    shipping: 'yes',
    quantity: '50',
    images: [],
    color: 'White',
    brand: 'Apple'
  })
  const {
    title,
    description,
    price,
    category,
    subCategories,
    shipping,
    quantity,
    color,
    brand,
    images
  } = formState
  const [categories, setCategories] = useState([])
  const [categorySubs, setCategorySubs] = useState([])
  const [colors, setColors] = useState([
    { _id: 'Black', name: 'Black' },
    { _id: 'Brown', name: 'Brown' },
    { _id: 'Silver', name: 'Silver' },
    { _id: 'White', name: 'White' },
    { _id: 'Blue', name: 'Blue' }
  ])
  const [brands, setBrands] = useState([
    { _id: 'Black', name: 'Black' },
    { _id: 'Apple', name: 'Apple' },
    { _id: 'Samsung', name: 'Samsung' },
    { _id: 'Microsoft', name: 'Microsoft' },
    { _id: 'Lenovo', name: 'Lenovo' },
    { _id: 'ASUS', name: 'ASUS' }
  ])
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitting, setSubmitting] = useState(false)

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

  const handleFileRemove = async (upload_id) => {
    setIsLoading(true)
    try {
      await removeImage(upload_id)
      setIsLoading(false)
      let filteredImages = images.filter((item) => {
        return item.upload_id !== upload_id
      })
      setFormState({ ...formState, images: filteredImages })
    } catch (error) {
      setIsLoading(false)
      console.log(error.message)
    }
  }

  const handleFileResizeAndUpload = (e) => {
    // resize
    let files = e.target.files // 3
    let allUploadedFiles = images

    if (files) {
      setIsLoading(true)
      for (let i = 0; i < files.length; i++) {
        Resizer.imageFileResizer(
          files[i],
          720,
          720,
          'JPEG',
          100,
          0,
          (uri) => {
            console.log(uri)
            // send back to server to upload to cloudinary
            upload(uri)
              .then((res) => {
                console.log('IMAGE UPLOAD RES DATA', res)
                setIsLoading(false)
                allUploadedFiles.push(res.data.data)

                // set url to images[] in the parent component state - ProductCreate
                setFormState({ ...formState, images: allUploadedFiles })
              })
              .catch((err) => {
                setIsLoading(false)
                console.log('CLOUDINARY UPLOAD ERR', err)
              })
          },
          'base64'
        )
      }
    }
    // send back to server to upload to cloudinary
    // set url to images[] in the parent component state - ProductCreate
  }

  const handleInputChange = (e) => {
    const { target } = e
    let value

    if (target.name === 'subCategories') {
      console.log(target.selectedOptions)
      value = Array.from(target.selectedOptions, (option) => option.value)
    } else {
      value = target.value
    }
    console.log(value)
    setFormState({
      ...formState,
      [target.name]: value
    })
  }

  const handleCategoryInputChange = async (e) => {
    const { name, value } = e.target
    setFormState({ ...formState, [name]: value })

    if (value.trim() !== '') {
      const response = await getCategorySubs(value)
      setCategorySubs(response.data.data)
    }
  }

  const submitForm = async (e) => {
    e.preventDefault()
    console.log(formState)
    setSubmitting(true)
    try {
      const response = await (initialData
        ? updateProduct(initialData.slug, formState)
        : createProduct(formState))
      console.log(response.data)
      setSubmitting(false)
    } catch (error) {
      setSubmitting(false)
      console.log(error.message)
    }
  }
  return (
    <Fragment>
      <TitleWithIcon
        title="Product"
        subTitle="10 Products"
        actions={[
          <SquareButton
            key="create"
            borderColor="#738297"
            bgColor="transparent"
            color="#fff"
            onClick={submitForm}>
            Create
          </SquareButton>
        ]}
      />
      <form>
        <div className="ProductCreate__form">
          <LineInput
            id="pcf-name"
            type="text"
            label="Title"
            required
            name="name"
            value={title}
            onChange={handleInputChange}
            placeholder="Name of product"
          />
          <LineInput
            id="pcf-description"
            type="text"
            label="Description"
            name="description"
            value={description}
            onChange={handleInputChange}
            placeholder="A description of product"
          />

          <LineInput
            id="pcf-number"
            type="number"
            min="0.00"
            label="Price"
            name="price"
            value={price}
            onChange={handleInputChange}
            placeholder="Whats the price?"
          />

          <LineInput
            id="pcf-quantity"
            type="number"
            min="0.00"
            label="Quantity"
            name="quantity"
            value={quantity}
            onChange={handleInputChange}
            placeholder="How many products?"
          />

          <SelectInput
            label="select a product category"
            name="category"
            value={category}
            onChange={handleCategoryInputChange}
            options={categories}
          />
          {categorySubs && categorySubs.length > 0 && (
            <SelectInput
              label="select sub-categories"
              name="subCategories"
              multiple
              value={subCategories}
              onChange={handleInputChange}
              options={categorySubs}
            />
          )}
          <SelectInput
            label="Is shipping available?"
            name="shipping"
            value={shipping}
            onChange={handleInputChange}
            options={[
              { _id: 'Yes', name: 'Yes' },
              { _id: 'No', name: 'No' }
            ]}
          />

          <SelectInput
            label="select a color"
            name="color"
            value={color}
            onChange={handleInputChange}
            options={colors}
          />

          <SelectInput
            label="select a brand"
            name="brand"
            value={brand}
            onChange={handleInputChange}
            options={brands}
          />
        </div>
        {/*<SquareButton borderColor="#738297" bgColor="transparent" color="#fff">
          Create
          </SquareButton>*/}
        <style jsx>{`
          .ProductCreate__form {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 3rem;
            margin-bottom: 3rem;
          }
        `}</style>
      </form>
      <>
        <div className="row">
          {images &&
            images.map(({ upload_id, url }) => (
              <Badge
                content="X"
                key={upload_id}
                onClick={() => handleFileRemove(upload_id)}
                style={{ cursor: 'pointer' }}>
                <Avatar src={url} size={100} shape="square" />
              </Badge>
            ))}
        </div>
        <div className="row">
          <label className="btn btn-primary">
            Choose File
            <input
              type="file"
              multiple
              hidden
              accept="images/*"
              onChange={handleFileResizeAndUpload}
            />
          </label>
        </div>
      </>
    </Fragment>
  )
}

ProductCreate.propTypes = {
  initialData: PropTypes.object
}

export default ProductCreate

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { getFilteredProducts, removeProduct } from '../../../../actions/product'
import ClipboardListIcon from '../../../icons/ClipboardListIcon'
import SquareButton from '../../../ui/buttons/SquareButton/SquareButton'
import AnimatedLoader from '../../../ui/loaders/AnimatedLoader/AnimatedLoader'
import Table from '../../../ui/Table/Table'
import TitleWithIcon from '../../../ui/titles/TitleWithIcon'
import classes from './ProductList.module.css'
import { openModal } from '../../../../store/redux/modal/modalActions'

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const dispatch = useDispatch()
  let mainContent

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
    try {
      const response = await getFilteredProducts({ limit: 10 })
      console.log(response.data)
      setIsLoading(false)
      setProducts(response.data.data)
    } catch (error) {
      console.log(error.message)
      setIsLoading(false)
    }
  }

  const handleDelete = async (item) => {
    try {
      const response = await removeProduct(item._id)
      loadProducts()
      console.log(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleEdit = (item) => {
    dispatch(
      openModal({
        modalType: 'CreateForm',
        modalProps: {
          initialData: item,
          onComplete: () => loadProducts()
        }
      })
    )
  }

  if (isLoading) {
    mainContent = (
      <div className={classes.Loader}>
        <AnimatedLoader />
      </div>
    )
  }

  if (!isLoading) {
    if (products.length <= 0) {
      mainContent = (
        <div className={classes.NoContent}>
          <ClipboardListIcon />
          <p>No content</p>
        </div>
      )
    } else {
      mainContent = (
        <Table
          items={products}
          headings={['Title', 'Description', 'Price', 'Quantity', 'Created at']}
          excludes={[
            '_id',
            '__v',
            'ratings',
            'sold',
            'creator',
            'createdBy',
            'isPublished',
            'images',
            'updatedAt',
            'category',
            'subCategories',
            'brand',
            'color',
            'isPublished',
            'shipping',
            'slug'
          ]}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )
    }
  }

  return (
    <div className={classes.ProductList}>
      <TitleWithIcon
        title="Products"
        subTitle="10 Products"
        actions={[
          <SquareButton
            key="create"
            borderColor="#738297"
            bgColor="transparent"
            color="#fff"
            onClick={() =>
              dispatch(
                openModal({
                  modalType: 'CreateForm',
                  modalProps: {
                    onComplete: () => loadProducts()
                  }
                })
              )
            }>
            Import
          </SquareButton>,
          <SquareButton
            key="create"
            borderColor="#738297"
            bgColor="transparent"
            color="#fff"
            onClick={() =>
              dispatch(
                openModal({
                  modalType: 'CreateForm',
                  modalProps: {
                    onComplete: () => loadProducts()
                  }
                })
              )
            }>
            Export
          </SquareButton>
        ]}
      />
      <div className={classes.Main}>{mainContent}</div>
    </div>
  )
}

ProductList.propTypes = {}

export default ProductList

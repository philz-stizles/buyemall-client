import React, { Fragment, useState } from 'react'
import { useSelector } from 'react-redux'
import SquareButton from '../../ui/buttons/SquareButton/SquareButton'
import TitleWithIcon from '../../ui/titles/TitleWithIcon'
import ProductCreate from './ProductCreate/ProductCreate'
import ProductDetail from './ProductDetail/ProductDetail'
import ProductList from './ProductList/ProductList'
import classes from './ProductsContent.module.css'

const ProductsContent = () => {
  const [currentContent, setCurrentContent] = useState('Product Create')
  const { activeMenuItem } = useSelector((state) => state.sidebar)
  let ProductContent

  if (activeMenuItem.includes('/admin/products/create')) {
    ProductContent = <ProductCreate />
  } else if (activeMenuItem.includes('/admin/products/list')) {
    ProductContent = <ProductList />
  } else if (activeMenuItem.includes('/admin/products/detail')) {
    ProductContent = <ProductDetail />
  } else {
    ProductContent = <ProductCreate />
  }

  return <div className={classes.ProductsContent}>{ProductContent}</div>
}

ProductsContent.propTypes = {}

export default ProductsContent

import React, { Fragment, useState } from 'react'
import SquareButton from '../../ui/buttons/SquareButton/SquareButton'
import TitleWithIcon from '../../ui/titles/TitleWithIcon'
import ProductCreate from './ProductCreate/ProductCreate'
import ProductDetail from './ProductDetail/ProductDetail'
import ProductList from './ProductList/ProductList'
import classes from './ProductsContent.module.css'

const ProductsContent = () => {
  const [currentContent, setCurrentContent] = useState('Product Create')
  let ProductContent

  switch (currentContent) {
    case 'Product Create': {
      ProductContent = <ProductCreate />
      break
    }
    case 'Product List': {
      ProductContent = <ProductList />
      break
    }
    case 'Product Detail': {
      ProductContent = <ProductDetail />
      break
    }
    default:
      ProductContent = <ProductCreate />
      break
  }

  return (
    <div className={classes.ProductsContent}>
      <TitleWithIcon
        title="Product"
        subTitle="10 Products"
        actions={[
          <SquareButton
            key="create"
            borderColor="#738297"
            bgColor="transparent"
            color="#fff"
            onClick={() => {}}>
            New Product
          </SquareButton>
        ]}
      />
      {ProductContent}
    </div>
  )
}

ProductsContent.propTypes = {}

export default ProductsContent

import React, { Fragment } from 'react'
import TabList from '../../ui/tabs/TabList/TabList'
// import PropTypes from 'prop-types'

const ProductsContent = () => {
  return (
    <Fragment>
      <TabList items={['New Product', 'Products List']} />
    </Fragment>
  )
}

ProductsContent.propTypes = {}

export default ProductsContent

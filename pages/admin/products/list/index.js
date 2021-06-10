import React from 'react'
import { getSession } from 'next-auth/client'
import PropTypes from 'prop-types'
import DashboardLayout from '../../../../components/layout/DashboardLayout/DashboardLayout'
import ProductList from '../../../../components/admin/products/ProductList/ProductList'

const ProductListPage = ({ session }) => {
  return (
    <DashboardLayout session={session}>
      <ProductList />
    </DashboardLayout>
  )
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/account',
        permanent: false
      }
    }
  }

  return {
    props: { session }
  }
}

ProductListPage.propTypes = {
  session: PropTypes.object.isRequired
}

export default ProductListPage

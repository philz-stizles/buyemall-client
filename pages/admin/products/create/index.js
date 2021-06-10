import React from 'react'
import { getSession } from 'next-auth/client'
import PropTypes from 'prop-types'
import DashboardLayout from '../../../../components/layout/DashboardLayout/DashboardLayout'
import ProductCreate from '../../../../components/admin/products/ProductCreate/ProductCreate'

const ProductCreatePage = ({ session }) => {
  return (
    <DashboardLayout session={session}>
      <ProductCreate />
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

ProductCreatePage.propTypes = {
  session: PropTypes.object.isRequired
}

export default ProductCreatePage

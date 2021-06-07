import React from 'react'
import { getSession } from 'next-auth/client'
import PropTypes from 'prop-types'
import DashboardLayout from '../../../components/layout/DashboardLayout/DashboardLayout'

const ProductsDashboardPage = ({ session }) => {
  return <DashboardLayout session={session}>Products</DashboardLayout>
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

ProductsDashboardPage.propTypes = {
  session: PropTypes.object.isRequired
}

export default ProductsDashboardPage

import React from 'react'
import { getSession } from 'next-auth/client'
import PropTypes from 'prop-types'
import DashboardLayout from '../../../components/layout/DashboardLayout/DashboardLayout'
import CategoriesContent from '../../../components/admin/categories/CategoriesContent'

const CategoriesDashboardPage = ({ session }) => {
  return (
    <DashboardLayout session={session}>
      <CategoriesContent />
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

CategoriesDashboardPage.propTypes = {
  session: PropTypes.object.isRequired
}

export default CategoriesDashboardPage

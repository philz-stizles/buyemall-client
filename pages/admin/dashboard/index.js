import React from 'react'
import { getSession } from 'next-auth/client'
import PropTypes from 'prop-types'
import DashboardContent from '../../../components/admin/dashboard/DashboardContent'
import DashboardLayout from '../../../components/layout/DashboardLayout/DashboardLayout'

const AdminDashboardPage = ({ session }) => {
  return (
    <DashboardLayout session={session}>
      <DashboardContent />
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

AdminDashboardPage.propTypes = {
  session: PropTypes.object.isRequired
}

export default AdminDashboardPage

import React from 'react'
import { getSession } from 'next-auth/client'
import PropTypes from 'prop-types'
import DashboardLayout from '../../../components/layout/DashboardLayout/DashboardLayout'
import UsersContent from '../../../components/admin/users/UsersContent'

const UsersDashboardPage = ({ session }) => {
  return (
    <DashboardLayout session={session}>
      <UsersContent />
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

UsersDashboardPage.propTypes = {
  session: PropTypes.object.isRequired
}

export default UsersDashboardPage

import React from 'react'
import { getSession } from 'next-auth/client'
import PropTypes from 'prop-types'
import DashboardLayout from '../../../components/layout/DashboardLayout/DashboardLayout'

const ReportsDashboardPage = ({ session }) => {
  console.log('Report client-side')
  return <DashboardLayout session={session}>Reports</DashboardLayout>
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
  console.log('Report server-side')
  return {
    props: { session }
  }
}

ReportsDashboardPage.propTypes = {
  session: PropTypes.object.isRequired
}

export default ReportsDashboardPage

import React from 'react'
import { getSession } from 'next-auth/client'
import PropTypes from 'prop-types'
import DashboardLayout from '../../../components/layout/DashboardLayout/DashboardLayout'
import CouponsContent from '../../../components/admin/coupons/CouponsContent'

const CouponsDashboardPage = ({ session }) => {
  return (
    <DashboardLayout session={session}>
      <CouponsContent />
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

CouponsDashboardPage.propTypes = {
  session: PropTypes.object.isRequired
}

export default CouponsDashboardPage

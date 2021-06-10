import React, { useEffect } from 'react'
import { getSession } from 'next-auth/client'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import DashboardLayout from '../../../components/layout/DashboardLayout/DashboardLayout'
import DashboardContent from '../../../components/admin/dashboard/DashboardContent'
import SubCategoriesContent from '../../../components/admin/subCategories/SubCategoriesContent'
import CategoriesContent from '../../../components/admin/categories/CategoriesContent'
import ProductsContent from '../../../components/admin/products/ProductsContent'
import CouponsContent from '../../../components/admin/coupons/CouponsContent'
import OrdersContent from '../../../components/admin/orders/OrdersContent'
import UsersContent from '../../../components/admin/users/UsersContent'
import { setActiveMenuItem } from '../../../store/redux/sidebar/sidebarActions'

const AdminDashboardPage = ({ session }) => {
  const { activeMenuItem } = useSelector((state) => state.sidebar)
  const dispatch = useDispatch()
  let mainContent

  useEffect(() => {
    const stringifiedActiveMenuItem = localStorage.getItem('activeMenuItem')
    if (stringifiedActiveMenuItem) {
      const parsedActiveMenuItem = JSON.parse(stringifiedActiveMenuItem)
      if (parsedActiveMenuItem) {
        dispatch(setActiveMenuItem(parsedActiveMenuItem))
      } else {
        dispatch(setActiveMenuItem(['/admin/dashboard']))
      }
    } else {
      dispatch(setActiveMenuItem(['/admin/dashboard']))
    }
  }, [])

  if (activeMenuItem.includes('/admin/dashboard')) {
    mainContent = <DashboardContent />
  } else if (activeMenuItem.includes('/admin/subCategories')) {
    mainContent = <SubCategoriesContent />
  } else if (activeMenuItem.includes('/admin/categories')) {
    mainContent = <CategoriesContent />
  } else if (activeMenuItem.includes('/admin/products')) {
    mainContent = <ProductsContent />
  } else if (activeMenuItem.includes('/admin/coupons')) {
    mainContent = <CouponsContent />
  } else if (activeMenuItem === '/admin/orders') {
    mainContent = <OrdersContent />
  } else if (activeMenuItem === '/admin/users') {
    mainContent = <UsersContent />
  }

  return <DashboardLayout session={session}>{mainContent}</DashboardLayout>
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

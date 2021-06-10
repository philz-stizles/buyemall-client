/* eslint-disable react/prop-types */
import React, { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import DashboardNav from '../../ui/navs/DashboardNav/DashboardNav'
import Sidebar from '../../ui/Sidebar/Sidebar'
import SIDEBAR_BLUPRINT from './../../../data/sidebar-data'
import { setActiveMenuItem } from '../../../store/redux/sidebar/sidebarActions'
import classes from './DashboardLayout.module.css'

const DashboardLayout = ({ children, session }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const router = useRouter()
  const dispatch = useDispatch()

  console.log(router)

  useEffect(() => {
    const stringified = localStorage.getItem('activeLink')
    const parsed = JSON.parse(stringified)
    if (parsed) {
      dispatch(setActiveMenuItem(parsed))
    } else {
      console.log('here')
      dispatch(setActiveMenuItem([router.route]))
    }
  }, [router])

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const menuBlueprint = SIDEBAR_BLUPRINT

  return (
    <Fragment>
      <div className={classes.DashboardContainer}>
        <DashboardNav onClick={toggleSidebar} session={session} />
        <Sidebar
          isOpen={isSidebarOpen}
          menuBlueprint={menuBlueprint}
          onClose={toggleSidebar}
          onClickLink={() => {}}
        />
        <main className={classes.DashboardMain}>{children}</main>
      </div>
    </Fragment>
  )
}

export default DashboardLayout

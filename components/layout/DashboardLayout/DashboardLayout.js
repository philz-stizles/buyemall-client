/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import DashboardNav from '../../ui/navs/DashboardNav/DashboardNav'
import Sidebar from '../../ui/Sidebar/Sidebar'
import SIDEBAR_BLUPRINT from './../../../data/sidebar-data'
import classes from './DashboardLayout.module.css'

const DashboardLayout = ({ children, session }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const menuBlueprint = SIDEBAR_BLUPRINT

  return (
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
  )
}

export default DashboardLayout

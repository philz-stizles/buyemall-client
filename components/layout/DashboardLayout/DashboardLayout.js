/* eslint-disable react/prop-types */
import React, { Fragment } from 'react'
import DashboardNav from '../../ui/navs/DashboardNav/DashboardNav'
import Sidebar from '../../ui/Sidebar/Sidebar'
import SIDEBAR_BLUPRINT from './../../../data/sidebar-data'
import classes from './DashboardLayout.module.css'

const DashboardLayout = ({ children, session }) => {
  const toggleSidebar = () => {}

  const menuBlueprint = SIDEBAR_BLUPRINT

  return (
    <Fragment>
      <div className={classes.DashboardContainer}>
        <DashboardNav onClick={toggleSidebar} session={session} />
        <Sidebar menuBlueprint={menuBlueprint} onClose={toggleSidebar} onClickLink={() => {}} />
        <main className={classes.DashboardMain}>{children}</main>
      </div>
    </Fragment>
  )
}

export default DashboardLayout

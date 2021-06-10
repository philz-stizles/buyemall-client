import React from 'react'
import PropTypes from 'prop-types'
import classes from './TabItem.module.css'

const TabItem = ({ label }) => {
  return <li className={classes.TabItem}>{label}</li>
}

TabItem.propTypes = {
  label: PropTypes.string.isRequired
}

export default TabItem

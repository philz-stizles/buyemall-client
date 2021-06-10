import React from 'react'
import PropTypes from 'prop-types'
import TabItem from '../TabItem/TabItem'
import classes from './TabList.module.css'

const TabList = ({ items }) => {
  return (
    <ul className={classes.TabList}>
      {items.map((item, i) => (
        <TabItem key={i} label={item} />
      ))}
    </ul>
  )
}

TabList.propTypes = {
  items: PropTypes.array.isRequired
}

export default TabList

import React from 'react'
import PropTypes from 'prop-types'
import classes from './FeatureBanner.module.css'

const Banner = ({ items, bgColor }) => {
  return (
    <div className={classes.Container} style={{ background: bgColor ? bgColor : '#e9e9de' }}>
      {items.map(({ icon, text }, index) => (
        <div key={index} className={classes.InfoCard}>
          {icon}
          <p>{text}</p>
        </div>
      ))}
    </div>
  )
}

Banner.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.element.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  bgColor: PropTypes.string
}

export default Banner

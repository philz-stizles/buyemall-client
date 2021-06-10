import React from 'react'
import PropTypes from 'prop-types'
import classes from './AnimatedLoader.module.css'

const AnimatedLoader = ({ color }) => {
  const colorStyles = {}

  if (color) {
    colorStyles.backgroundColor = color
    colorStyles.border = `2px solid ${color}`
  }
  return <div style={colorStyles} className={classes.AnimatedLoader}></div>
}

AnimatedLoader.propTypes = {
  color: PropTypes.string
}

export default AnimatedLoader

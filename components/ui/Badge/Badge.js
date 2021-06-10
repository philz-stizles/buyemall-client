import React from 'react'
import PropTypes from 'prop-types'

const Badge = ({ content, onClick, children }) => {
  return (
    <div className="Badge" onClick={onClick} aria-hidden="true">
      {children}
      <style>{`.Badge {}`}</style>
    </div>
  )
}

Badge.propTypes = {
  content: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  children: PropTypes.any.isRequired
}

export default Badge

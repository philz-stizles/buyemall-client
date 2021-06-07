import React from 'react'
import PropTypes from 'prop-types'

const SquareButton = ({ children, expanded, ...rest }) => {
  return (
    <button className="SquareButton" {...rest}>
      {children}
      <style jsx>{`
        .SquareButton {
          display: inline-block;
          padding: 1rem 3rem;
          line-height: normal;
          text-decoration: none;
          text-align: center;
          text-transform: uppercase;
          vertical-align: middle;
          white-space: nowrap;
          cursor: pointer;
          border: 1px solid transparent;
          background-color: #121212;
          opacity: ${rest.disabled ? '0.5' : '1'};
          color: #fff;
          width: ${expanded ? '100%' : 'unset'};
          border: 2px solid transparent;
          transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out,
            border-color 0.4s ease-in-out;
        }
      `}</style>
    </button>
  )
}

SquareButton.propTypes = {
  children: PropTypes.any.isRequired,
  expanded: PropTypes.bool,
  onClick: PropTypes.func
}

export default SquareButton

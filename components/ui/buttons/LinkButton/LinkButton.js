import React from 'react'
import PropTypes from 'prop-types'

const LinkButton = ({ children, onClick }) => {
  return (
    <button className="LinkButton" onClick={onClick}>
      {children}
      <style jsx>{`
        .LinkButton {
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
          background-color: transparent;
          color: #fff;
          border: 2px solid transparent;
          transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out,
            border-color 0.4s ease-in-out;
        }
      `}</style>
    </button>
  )
}

LinkButton.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func
}

export default LinkButton

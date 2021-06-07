import React from 'react'
import PropTypes from 'prop-types'

const SelectInput = ({ label, ...rest }) => {
  return (
    <div className="SelectInput">
      <label htmlFor={rest.id}>{label}</label>
      <select {...rest} id={rest.id}>
        <option value="Customer">Customer - Buyer</option>
        <option value="Business">Business - Seller</option>
      </select>

      <style jsx>{`
        .SelectInput {
          margin-top: 3rem;
        }

        .SelectInput select {
          display: inline-block;
          padding: 10px 30px;
          line-height: normal;
          text-transform: uppercase;
          cursor: pointer;
          border: 2px solid #121212;
          color: #121212;
          background: transparent;
          transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out,
            border-color 0.4s ease-in-out;
        }

        .SelectInput label {
          display: inline-block;
          cursor: text;
          transform-origin: left bottom;
          text-overflow: ellipsis;
          overflow: hidden;
          font-size: 1.2rem;
          font-weight: 500;
          letter-spacing: 0.049999999999999996em;
          text-transform: uppercase;
          line-height: 1.2857142857;
          opacity: 0.5;
          color: #121212;
          margin-bottom: 0.7rem;
          transition: all 0.17s linear;
        }
      `}</style>
    </div>
  )
}

SelectInput.propTypes = {
  label: PropTypes.string
}

export default SelectInput

import React from 'react'
import PropTypes from 'prop-types'

const SolidInput = ({ label, ...rest }) => {
  return (
    <div className="SolidInput">
      <label htmlFor={rest.name}>{label}</label>
      <input type="text" {...rest} id={rest.name} />
      <style jsx>{`
        .SolidInput {
          margin-bottom: 1.25rem;
        }

        .SolidInput input {
          height: 4.5rem;
          font-size: 0.875rem;
          padding: 0 0.5rem;
          border-radius: none;
          appearance: none;
          color: rgb(0, 0, 0);
          background-color: rgb(255, 255, 255);
          width: 100%;
          text-overflow: ellipsis;
          border-width: 1px;
          border-style: solid;
          transition: border-color 0.2s ease 0s, box-shadow 0.2s ease 0s;
          border-color: rgb(205, 205, 205);
          overflow: visible;
        }

        .SolidInput label {
          font-size: 1.4rem;
          font-weight: 500;
          color: rgb(0, 0, 0);
          display: inline-block;
          line-height: 1.4;
          margin-bottom: 0.5rem;
        }
      `}</style>
    </div>
  )
}

SolidInput.propTypes = {
  label: PropTypes.string
}

export default SolidInput

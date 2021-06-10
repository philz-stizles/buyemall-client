import React from 'react'
import PropTypes from 'prop-types'

const SelectInput = ({ label, options, ...rest }) => {
  return (
    <div className="SelectInput">
      {/*<label htmlFor={rest.id}>{label}</label>**/}
      <select {...rest} id={rest.id}>
        <option>{label}</option>
        {options.map(({ _id, name }) => (
          <option key={_id} value={_id}>
            {name}
          </option>
        ))}
      </select>

      <style jsx>{`
        .SelectInput {
          width: 100%;
          margin-top: 3rem;
        }

        .SelectInput select {
          width: 100%;
          font-size: 1.2rem;
          display: inline-block;
          padding: 10px 30px 10px 0;
          line-height: normal;
          text-transform: uppercase;
          cursor: pointer;
          border-bottom: 2px solid #738297;
          color: #738297;
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
          color: #738297;
          margin-bottom: 0.7rem;
          transition: all 0.17s linear;
        }
      `}</style>
    </div>
  )
}

SelectInput.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array.isRequired
}

export default SelectInput

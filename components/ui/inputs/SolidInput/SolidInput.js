// import React, { forwardRef, useRef } from 'react'
import PropTypes from 'prop-types'

const SolidInput = ({ label, ...rest }) => {
  return (
    <div className="SolidInput">
      <label htmlFor={rest.name}>{label}</label>
      {rest.type === 'text' ? <input {...rest} id={rest.name} /> : <textarea {...rest}></textarea>}
      <style jsx>{`
        .SolidInput {
          margin-bottom: 1.25rem;
        }

        .SolidInput input,
        .SolidInput textarea {
          font-size: 1.4rem;
          line-height: 1.21428571em;
          padding: 0.67857143em 1em;
          background: #fff;
          border: 1px solid rgba(34, 36, 38, 0.15);
          border-radius: none;
          appearance: none;
          // color: rgba(34, 36, 38, 0.15);
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

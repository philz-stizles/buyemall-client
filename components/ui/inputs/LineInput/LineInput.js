import React from 'react'
import PropTypes from 'prop-types'

const LineInput = ({ label, ...rest }) => {
  return (
    <div data-test="line-input" className="LineInput">
      <input type="text" {...rest} id={rest.id} autoComplete="off" />
      <label htmlFor={rest.id}>{label}</label>
      <style jsx>{`
        .LineInput {
          display: flex;
          flex-flow: column;
          width: 100%;
          margin: 2rem 1rem 0 0;
        }

        .LineInput input {
          border: 0;
          border-bottom: 2px solid #738297;
          cursor: text;
          padding: 0.3em 0;
          border-radius: 0;
          color: #738297;
          line-height: 1.7142857143;
          background: none;
          font-weight: 500;
          transition: all 0.17s linear;
          touch-action: manipulation;
          -webkit-appearance: none;
        }

        .LineInput label {
          transform-origin: left bottom;
          text-overflow: ellipsis;
          max-width: 80%;
          white-space: nowrap;
          overflow: hidden;
          order: -1;
          font-size: 1.2rem;
          font-weight: 500;
          letter-spacing: 0.049999999999999996em;
          text-transform: uppercase;
          line-height: 1.2857142857;
          opacity: 0.5;
          transition: all 0.17s linear;
          touch-action: manipulation;
          color: #738297;
        }

        .LineInput input:placeholder-shown + label {
          transform: translateY(2em) scale(1);
          cursor: text;
        }

        /**
        * By default, the placeholder should be transparent. Also, it should 
        * inherit the transition.
        */
        ::-webkit-input-placeholder {
          opacity: 0;
          transition: inherit;
        }
        /**
        * Show the placeholder when the input is focused.
        */
        .LineInput input:focus::-webkit-input-placeholder {
          opacity: 1;
        }
        /**
        * When the element is focused, remove the label transform.
        * Also, do this when the placeholder is _not_ shown, i.e. when 
        * there's something in the input at all.
        */
        .LineInput input:focus + label,
        .LineInput input:not(:placeholder-shown) + label {
          transform: translate(0) scale(0.7);
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}

LineInput.propTypes = {
  label: PropTypes.string
}

export default LineInput

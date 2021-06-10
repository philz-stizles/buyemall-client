import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { closeModal } from '../../../store/redux/modal/modalActions'
import CloseIcon from '../../icons/CloseIcon'

const ModalWrapper = ({ children, header }) => {
  const dispatch = useDispatch()

  return (
    <Fragment>
      <div
        className="Backdrop"
        onClick={() => {
          dispatch(closeModal(null))
        }}
        aria-hidden="true"></div>
      <div className="Modal">
        <div className="Modal__header">
          {header && <h3>{header}</h3>}{' '}
          <span className="Modal__close">
            <CloseIcon />
          </span>
        </div>
        <div className="Modal__content">{children}</div>
      </div>
      <style jsx>{`
        .Backdrop {
          position: fixed;
          justify-content: flex-start;
          perspective: 2000px;
          transform-origin: center center;
          display: flex !important;

          opacity: 1;
          overflow: auto;
          top: 0 !important;
          left: 0 !important;
          width: 100%;
          height: 100%;
          text-align: center;
          vertical-align: middle;
          padding: 1em;
          background-color: rgba(27, 36, 49, 0.85);
          line-height: 1;
          animation-fill-mode: both;
          animation-duration: 0.5s;
          transition: background-color 0.5s linear;
          flex-direction: column;
          align-items: center;
          user-select: none;
          will-change: opacity;
          z-index: 5000;
        }

        .Modal {
          left: 50%;
          transform: translate(-50%, 40%);
          min-width: 36rem;
          margin: 1rem auto;
          display: block !important;
          position: fixed;
          z-index: 5001;
          text-align: left;
          background: #fff;
          border: none;
          box-shadow: 1px 3px 3px 0 rgb(0 0 0 / 20%), 1px 3px 15px 2px rgb(0 0 0 / 20%);
          transform-origin: 50% 25%;
          flex: 0 0 auto;
          border-radius: 0.28571429rem;
          user-select: text;
          will-change: top, left, margin, transform, opacity;
          animation-iteration-count: 1;
          animation-duration: 0.3s;
          animation-timing-function: ease;
          animation-fill-mode: both;
          overflow-x: auto;
        }

        .Modal__content {
          padding: 2.5rem 1.5rem;
        }

        .Modal__header {
          border-bottom: 1px solid rgba(34, 36, 38, 0.15);
          padding: 1.5rem;
          display: flex;
          align-items: center;
        }

        .Modal__header h3 {
          font-size: 1.5rem;
        }

        .Modal__close {
          display: inline-block;
          margin-left: auto;
          width: 1.5rem;
          height: 1.5rem;
        }
      `}</style>
    </Fragment>
  )
}

ModalWrapper.propTypes = {
  children: PropTypes.any,
  size: PropTypes.number,
  header: PropTypes.string
}

export default ModalWrapper

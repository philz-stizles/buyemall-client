import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { closeModal } from '../../redux/actions/modalActions'

const ModalWrapper = ({ children, size, header }) => {
  const dispatch = useDispatch()

  return (
    <div className="Modal" onClose={() => dispatch(closeModal())}>
      {header && <h4 className="Modal__header">{header}</h4>}
      <div className="Modal__content">{children}</div>
      <style jsx>{`
        .Modal {
        }
      `}</style>
    </div>
  )
}

ModalWrapper.propTypes = {
  size: PropTypes.number,
  header: PropTypes.string
}

export default ModalWrapper

import React from 'react'
import PropTypes from 'prop-types'

const Backdrop = ({ isShowing, onClick, transparent }) => {
  return isShowing ? (
    <div onClick={onClick} className="Backdrop" aria-hidden="true">
      <style jsx>{`
        .Backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: ${transparent ? 'transparent' : 'rgba(0, 0, 0, 0.5)'};
        }
      `}</style>
    </div>
  ) : null
}

Backdrop.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  transparent: PropTypes.bool
}

export default Backdrop

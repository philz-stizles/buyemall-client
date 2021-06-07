import React from 'react'

const RoundIcon = ({icon}) => {
  return (
    <a className="RoundIcon" href="#">
      <i className={icon} />
      <style jsx>{`
        .RoundIcon {
          margin-left: 1.5rem;
          text-decoration: none;
        }

        .RoundIcon i {
          color: #a5aaad;
          font-size: 2.4rem;
          padding: .7rem;
          border-radius: 50px;
          background: #fff;
          box-shadow: 2px 2px 5px #d9d9d9,
            -2px -2px 5px #ffffff;
        }
      `}</style>
    </a>
  )
}

export default RoundIcon

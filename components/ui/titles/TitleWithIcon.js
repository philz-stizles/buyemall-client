import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const TitleWithIcon = ({ title, subTitle, icon, actions }) => {
  return (
    <header className="TitleWithIcon">
      <div>
        <h1 className="TitleWithIcon__title">{title}</h1>
        <span className="TitleWithIcon__sub-title">| {subTitle}</span>
      </div>
      {icon && <i className={icon} aria-hidden="true" />}
      {actions && (
        <div className="TitleWithIcon__actions">
          {actions.map((action, i) => (
            <Fragment key={i}>{action}</Fragment>
          ))}
        </div>
      )}

      <style jsx>{`
        .TitleWithIcon {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #fff;
          padding: 2.2rem 0;
        }

        .TitleWithIcon__title {
          display: inline-block;
          font-size: 2.4rem;
          font-weight: 400;
        }

        .TitleWithIcon__sub-title {
          margin-left: 1rem;
          color: #738297;
          font-size: 1.6rem;
        }

        .TitleWithIcon i {
          cursor: pointer;
          float: right;
          font-size: 1.6rem;
          margin: 0.5rem 0;
        }
      `}</style>
    </header>
  )
}

TitleWithIcon.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  icon: PropTypes.string,
  iconColor: PropTypes.string,
  items: PropTypes.array,
  actions: PropTypes.array
}

export default TitleWithIcon

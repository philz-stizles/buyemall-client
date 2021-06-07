import React from 'react'

const TitleWithIcon = ({title, subTitle, icon, iconColor}) => {
  return (
    <header className="TitleWithIcon">
      <h1 className="TitleWithIcon__title">{title}</h1>
      <span className="TitleWithIcon__sub-title">| {subTitle}</span>
      {icon && <i className={icon} aria-hidden="true" />}

      <style jsx>{`
        .TitleWithIcon {
          color: #fff;
          padding: 2.2rem;
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
          margin: .5rem 0;
        }
      `}</style>
    </header>
  )
}

export default TitleWithIcon

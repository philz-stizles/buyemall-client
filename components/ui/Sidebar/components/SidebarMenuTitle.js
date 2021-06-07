import React from 'react'

const SidebarMenuTitle = ({title, icon}) => {
  return (
    <h2 className="SidebarMenuTitle">
      <span>{title}</span>
      <i className={icon}></i>

      <style jsx>{`
        .SidebarMenuTitle {
          text-transform: uppercase;
          color: #6c757d;
          font-size: 1.4rem;
          margin-top: 1.5rem;
          margin-bottom: .5rem;
          padding: 0 1.5rem;
          font-weight: 500;
        }
      `}</style>
    </h2>
  )
}

export default SidebarMenuTitle

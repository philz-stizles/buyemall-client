import React from 'react'
import PropTypes from 'prop-types'
import SidebarMenuItem from './SidebarMenuItem'
import SidebarMenuTitle from './SidebarMenuTitle'
const SidebarMenu = ({ title, items, onClickLink }) => {
  return (
    <ul className="SidebarMenu">
      {title && <SidebarMenuTitle title={title} />}
      {items.map(({ id, icon, text }) => (
        <SidebarMenuItem
          key={id}
          href={id}
          color="#a5aaad"
          icon={icon}
          text={text}
          onClickLink={() => onClickLink(id)}
        />
      ))}
      <style jsx>{`
        .SidebarMenu {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          list-style: none;
          margin-bottom: 1.5rem;
        }
      `}</style>
    </ul>
  )
}

SidebarMenu.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  onClickLink: PropTypes.func.isRequired
}

export default SidebarMenu

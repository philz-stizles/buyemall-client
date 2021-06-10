import React from 'react'
import SidebarMenu from './components/SidebarMenu'
import PropTypes from 'prop-types'

const Sidebar = ({ isOpen, onClickLink, menuBlueprint }) => {
  const clickLinkHandler = (id) => {
    onClickLink(id)
  }

  const sidebarClass = isOpen ? ['Sidebar'] : ['Sidebar', 'Sidebar__open']

  return (
    <div className={sidebarClass.join(' ')}>
      <div className="Sidebar__sticky">
        {menuBlueprint.map(({ title, items }, i) => (
          <SidebarMenu key={i} title={title} items={items} onClickLink={clickLinkHandler} />
        ))}
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClickLink: PropTypes.func.isRequired,
  menuBlueprint: PropTypes.array.isRequired,
  onClose: PropTypes.func.isRequired
}

export default Sidebar

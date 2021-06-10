import React from 'react'
import SidebarMenu from './components/SidebarMenu'
import PropTypes from 'prop-types'

const Sidebar = ({ isOpen, menuBlueprint }) => {
  const sidebarClass = isOpen ? ['Sidebar'] : ['Sidebar', 'Sidebar__open']

  return (
    <div className={sidebarClass.join(' ')}>
      <div className="Sidebar__sticky">
        {menuBlueprint.map(({ title, items }, i) => (
          <SidebarMenu key={i} title={title} items={items} />
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

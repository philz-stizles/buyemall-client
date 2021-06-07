import React, { useState } from 'react'
import SidebarMenu from './components/SidebarMenu'
import PropTypes from 'prop-types'

const Sidebar = ({ isOpen, onClickLink, menuBlueprint }) => {
  const [activeMenuItem, setActiveMenuItem] = useState(menuBlueprint[0].items[0].id)
  const clickLinkHandler = (id) => {
    setActiveMenuItem(id)
    onClickLink(id)
  }

  const sidebarClass = isOpen ? ['Sidebar'] : ['Sidebar', 'Sidebar__open']

  return (
    <div className={sidebarClass.join(' ')}>
      <div className="Sidebar__sticky">
        <SidebarMenu
          title={menuBlueprint[0].title}
          activeMenuItem={activeMenuItem}
          items={menuBlueprint[0].items}
          onClickLink={clickLinkHandler}
        />
        <SidebarMenu
          activeMenuItem={activeMenuItem}
          title={menuBlueprint[1].title}
          items={menuBlueprint[1].items}
          onClickLink={clickLinkHandler}
        />
      </div>

      <style jsx>{``}</style>
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

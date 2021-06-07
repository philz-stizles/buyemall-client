import Link from 'next/link'
import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveMenuItem } from '../../../../store/redux/sidebar/sidebarActions'

const SidebarMenuItem = ({ href, icon, text }) => {
  const { activeMenuItem } = useSelector((state) => state.sidebar)
  const dispatch = useDispatch()

  const isActive = activeMenuItem === href
  return (
    <li
      className="SidebarMenuItem"
      onClick={() => dispatch(setActiveMenuItem(href))}
      aria-hidden="true">
      <Link href={href}>
        <a>
          <i className={icon} />
          {text}
        </a>
      </Link>

      <style jsx>{`
        .SidebarMenuItem > a {
          display: flex;
          align-items: center;
          border-left: 5px solid ${isActive ? '#738297' : 'transparent'};
          color: ${isActive ? '#fff' : '#738297'};
          padding: 0.5rem 0.75rem;
          font-weight: 400;
          font-size: 1.4rem;
        }

        .SidebarMenuItem i {
          display: inline-block;
          font-size: 2.4rem;
          margin-right: 1.5rem;
          min-width: 2.5rem;
          line-height: 1;
          vertical-align: middle;
        }
      `}</style>
    </li>
  )
}

SidebarMenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
}

export default SidebarMenuItem

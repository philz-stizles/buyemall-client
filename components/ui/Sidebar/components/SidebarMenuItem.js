import Link from 'next/link'
import React, { Fragment } from 'react'
import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveMenuItem, toggleDropdown } from '../../../../store/redux/sidebar/sidebarActions'
import ChevronDownIcon from '../../../icons/ChevronDownIcon'

const SidebarMenuItem = ({ href, icon, text, items, hasParent, parent }) => {
  const { activeMenuItem, isDropdownOpen } = useSelector((state) => state.sidebar)
  const router = useRouter()
  const dispatch = useDispatch()

  const isActive = activeMenuItem.includes(href)

  const hasItems = items && items.length > 0

  let dropDownClass = 'SidebarMenuItem__collapse'
  if (isDropdownOpen === true) {
    dropDownClass += ' show'
  }

  return (
    <li
      className="SidebarMenuItem"
      aria-hidden="true"
      onClick={() => {
        if (hasItems) {
          console.log(href)
          dispatch(toggleDropdown())
          dispatch(setActiveMenuItem([href, items[0].id]))
          router.push(items[0].id)
        } else if (hasParent) {
          console.log(href)
          dispatch(setActiveMenuItem([parent, href]))
          router.push(href)
        } else {
          console.log(href)
          dispatch(setActiveMenuItem([href]))
          router.push(href)
        }
      }}>
      <div className="SidebarMenuItem__link">
        <span>
          <i className={icon} />
          {text}
        </span>
        {hasItems && (
          <span className="dropIcon">
            <ChevronDownIcon />
          </span>
        )}
      </div>
      {hasItems && (
        <div className={dropDownClass}>
          <ul>
            {items.map(({ id, text, parent }) => (
              <SidebarMenuItem
                key={id}
                href={id}
                color="#a5aaad"
                text={text}
                hasParent
                parent={parent}
              />
            ))}
          </ul>
        </div>
      )}

      <style jsx>{`
        .SidebarMenuItem__link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-left: 5px solid ${isActive ? '#738297' : 'transparent'};
          color: ${isActive ? '#fff' : '#738297'};
          padding: 0.5rem 0.75rem;
          font-weight: 400;
          font-size: 1.4rem;
          cursor: pointer;
        }

        .SidebarMenuItem__link span {
          display: inline-flex;
          align-items: center;
        }

        .SidebarMenuItem i {
          display: inline-block;
          font-size: 2.4rem;
          margin-right: 1.5rem;
          min-width: 2.5rem;
          line-height: 1;
          vertical-align: middle;
        }

        .SidebarMenuItem .dropIcon {
          display: inline-block;
          width: 1.6rem;
          height: 1.6rem;
        }

        .SidebarMenuItem__collapse {
          // visibility: hidden;
          // opacity: 0;
          display: none;
          // height: 0;
          // overflow: hidden;
          // transition: height 0.6s, visibility 0s, opacity 0.5s linear;
        }

        .SidebarMenuItem__collapse.show {
          // visibility: visible;
          // opacity: 1;
          // height: ;
          display: block;
        }

        .SidebarMenuItem__collapse.collapsing {
          height: 0;
          overflow: hidden;
          transition: height 0.35s ease;
        }
      `}</style>
    </li>
  )
}

SidebarMenuItem.propTypes = {
  href: PropTypes.string.isRequired,
  icon: PropTypes.string,
  text: PropTypes.string.isRequired,
  items: PropTypes.array,
  hasParent: PropTypes.bool
}

export default SidebarMenuItem

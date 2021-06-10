import { CLOSE_SIDEBAR, OPEN_SIDEBAR, SET_ACTIVE_LINK, TOGGLE_DROPDOWN } from '../types'

/**
 * @function  setActiveMenuItem
 * @param  {string} activeLink - sidebar menu active link
 * @returns  {object} - action object with action-type "SET_ACTIVE_LINK"
 */
export const setActiveMenuItem = (activeLink) => {
  console.log(activeLink)
  localStorage.setItem('activeLink', JSON.stringify(activeLink))
  return {
    type: SET_ACTIVE_LINK,
    payload: activeLink
  }
}

export const toggleDropdown = (activeLink) => {
  return {
    type: TOGGLE_DROPDOWN,
    payload: activeLink
  }
}

/**
 * @function  closeSidebar
 * @returns  {object} - action object with action-type "CLOSE_SIDEBAR"
 */
export const closeSidebar = () => {
  return {
    type: CLOSE_SIDEBAR
  }
}

/**
 * @function  openSidebar
 * @returns  {object} - action object with action-type "OPEN_SIDEBAR"
 */
export const openSidebar = () => {
  return {
    type: OPEN_SIDEBAR
  }
}

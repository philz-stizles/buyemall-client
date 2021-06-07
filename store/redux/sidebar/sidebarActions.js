import { CLOSE_SIDEBAR, OPEN_SIDEBAR, SET_ACTIVE_LINK } from '../types'

/**
 * @function  setActiveMenuItem
 * @param  {string} activeLink - sidebar menu active link
 * @returns  {object} - action object with action-type "SET_ACTIVE_LINK"
 */
export const setActiveMenuItem = (activeLink) => {
  return {
    type: SET_ACTIVE_LINK,
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

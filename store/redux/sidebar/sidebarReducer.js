import { CLOSE_SIDEBAR, OPEN_SIDEBAR, SET_ACTIVE_LINK, TOGGLE_DROPDOWN } from '../types'

const initialState = {
  isOpen: true,
  activeMenuItem: ['/admin/dashboard'],
  isDropdownOpen: false
}

/**
 * @function  sidebarReducer
 * @param  {object} state - previous sidebar state
 * @param  {object} action - action to be reduced
 * @returns  {object} - new sidebar state
 */
const sidebarReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_ACTIVE_LINK: {
      return {
        ...state,
        activeMenuItem: [...payload]
      }
    }
    case TOGGLE_DROPDOWN: {
      return {
        ...state,
        isDropdownOpen: !state.isDropdownOpen
      }
    }
    case CLOSE_SIDEBAR: {
      return {
        ...state,
        isOpen: false
      }
    }
    case OPEN_SIDEBAR: {
      return {
        ...state,
        isOpen: true
      }
    }

    default:
      return state
  }
}

export default sidebarReducer

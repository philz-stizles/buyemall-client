import { CLOSE_SIDEBAR, OPEN_SIDEBAR, SET_ACTIVE_LINK } from '../types'
import { closeSidebar, openSidebar, setActiveMenuItem } from './sidebarActions'

describe('Sidebar actions', () => {
  test('It should handle changing active menu item', () => {
    const newActiveMenuItem = 'Products'
    const expectedAction = { type: SET_ACTIVE_LINK, payload: newActiveMenuItem }
    expect(setActiveMenuItem(newActiveMenuItem)).toEqual(expectedAction) // With Jest, use toEqual()
    // rather than toBe() because you really can't use it when comparing
    // objects or arrays or any kind of mutable data types, use for
    // immutable  data types like numbers and strings
  })

  test('It should handle closing the sidebar', () => {
    const expectedAction = { type: CLOSE_SIDEBAR }
    expect(closeSidebar()).toEqual(expectedAction) // With Jest, use toEqual()
    // rather than toBe() because you really can't use it when comparing
    // objects or arrays or any kind of mutable data types, use for
    // immutable  data types like numbers and strings
  })

  test('It should handle opening the sidebar', () => {
    const expectedAction = { type: OPEN_SIDEBAR }
    expect(openSidebar()).toEqual(expectedAction) // With Jest, use toEqual()
    // rather than toBe() because you really can't use it when comparing
    // objects or arrays or any kind of mutable data types, use for
    // immutable  data types like numbers and strings
  })
})

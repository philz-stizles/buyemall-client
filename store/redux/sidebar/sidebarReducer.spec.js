import { CLOSE_SIDEBAR, OPEN_SIDEBAR, SET_ACTIVE_LINK } from '../types'
import sidebarReducer from './sidebarReducer'

describe('Sidebar Reducer', () => {
  let initState
  beforeAll(() => {
    initState = { isOpen: true, activeMenuItem: '/admin/dashboard' }
  })

  test('It should return the initial state', () => {
    const action = {}
    expect(sidebarReducer(undefined, action)).toEqual(initState)
  })

  test('It should handle CLOSE_SIDEBAR', () => {
    const action = { type: CLOSE_SIDEBAR }
    const expectedState = { isOpen: false, activeMenuItem: '/admin/dashboard' }
    expect(sidebarReducer(undefined, action)).toEqual(expectedState)
  })

  test('It should handle OPEN_SIDEBAR', () => {
    const action = { type: OPEN_SIDEBAR }
    const expectedState = { isOpen: true, activeMenuItem: '/admin/dashboard' }
    expect(sidebarReducer(undefined, action)).toEqual(expectedState)
  })

  test('It should handle SET_ACTIVE_LINK', () => {
    const action = { type: SET_ACTIVE_LINK, payload: '/admin/products' }
    const expectedState = { isOpen: true, activeMenuItem: action.payload }
    expect(sidebarReducer(undefined, action)).toEqual(expectedState)
  })
})

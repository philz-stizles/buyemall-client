import { CLOSE_MODAL, OPEN_MODAL } from '../types'

const initialState = null

const modalReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case OPEN_MODAL: {
      return { ...payload }
    }
    case CLOSE_MODAL: {
      return null
    }
    default:
      return state
  }
}

export default modalReducer

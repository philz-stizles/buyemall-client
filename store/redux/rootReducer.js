import { combineReducers } from 'redux'
import sidebarReducer from './sidebar/sidebarReducer'
import modalReducer from './modal/modalReducer'

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  modal: modalReducer
})

export default rootReducer

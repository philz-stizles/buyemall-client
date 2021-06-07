import checkPropTypes from 'check-prop-types'
import { createStore } from 'redux'
import rootReducer from './../store/redux/rootReducer'

/**
 * Return node(s) with the given data-test attribute
 * @param  {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param  {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
export const findByTestClass = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`)
}

// /**
//  * Return node(s) with the given data-test attribute
//  * @param  {JSX.Element} component - React component
//  * @param  {object} conformingProps - Value of data-test attribute for search
//  * @returns {undefined}
//  */
export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(component.propTypes, conformingProps, 'prop', component.name)
  expect(propError).toBeUndefined()
}

/**
 * Create a testing store with imported reducers, middleware, and initial state
 * @function  storeFactory
 * @param  {object} initialState - Initial state for store
 * @returns {Store} - Redux store.
 */
export const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState)
}

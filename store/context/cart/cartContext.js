import { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  addItemToCart,
  removeItemFromCart,
  incrementCartItem,
  decrementCartItem,
  getItemsCount,
  getTotalAmount
} from './cartActions'

// Context cannot handle async actions
// The context can store anything - strings, integers, arrays, objects, functions
// Wrap of the application in which you need the context
const CartContext = createContext({
  isShowing: false,
  cartItems: [],
  totalAmount: 0,
  itemsCount: 0,
  addToCart: () => {},
  removeFromCart: () => {},
  incrementItem: () => {},
  decrementItem: () => {},
  toggleCartIsShowing: () => {}
})

export const CartProvider = ({ children }) => {
  const [isShowing, setIsShowing] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [totalAmount, setTotalAmount] = useState(0)
  const [itemsCount, setItemsCount] = useState(0)

  // UseEFect as ComponentDidMount & ComponentWillUpdate
  useEffect(() => {
    setItemsCount(getItemsCount(cartItems))
    setTotalAmount(getTotalAmount(cartItems))
  }, [cartItems])

  const addToCart = (item) => setCartItems(addItemToCart(cartItems, item))
  const removeFromCart = (id) => setCartItems(removeItemFromCart(cartItems, id))
  const incrementItem = (id) => setCartItems(incrementCartItem(cartItems, id))
  const decrementItem = (id) => setCartItems(decrementCartItem(cartItems, id))
  const toggleCartIsShowing = () => setIsShowing(!isShowing)

  return (
    <CartContext.Provider
      value={{
        isShowing,
        cartItems,
        itemsCount,
        totalAmount,
        addToCart,
        removeFromCart,
        incrementItem,
        decrementItem,
        toggleCartIsShowing
      }}>
      {children}
    </CartContext.Provider>
  )
}

CartProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired
}

export default CartContext

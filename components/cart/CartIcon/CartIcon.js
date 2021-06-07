import React, { useContext } from 'react'
import ShoppingCartIcon from './../../icons/ShoppingCartIcon'
import classes from './CartIcon.module.css'
import CartContext from '../../../store/context/cart/cartContext'

const CartIcon = () => {
  const { toggleCartIsShowing, itemsCount } = useContext(CartContext)
  return (
    <div className={classes.CartIcon} onClick={() => toggleCartIsShowing()} aria-hidden="true">
      <ShoppingCartIcon />
      <span className={classes['CartIcon__item-count']}> {itemsCount} </span>
    </div>
  )
}

export default CartIcon

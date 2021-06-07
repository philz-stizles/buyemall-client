import React, { useContext } from 'react'
import { useRouter } from 'next/router'
import SquareButton from '../../ui/buttons/SquareButton/SquareButton'
import classes from './CartDropdown.module.css'
import CartContext from '../../../store/context/cart/cartContext'
import CartItem from '../CartItem/CartItem'

const CartDropdown = () => {
  const router = useRouter()
  const { cartItems, toggleCartIsShowing } = useContext(CartContext)

  return (
    <div className={classes.CartDropdown}>
      <div className={classes.CartDropdown__cartItems}>
        {cartItems.length ? (
          cartItems.map((item) => {
            return <CartItem key={item.id} item={item} />
          })
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <SquareButton
        disabled={cartItems.length <= 0 ? true : false}
        onClick={() => {
          toggleCartIsShowing()
          router.push('/checkout')
        }}>
        GO TO CHECKOUT
      </SquareButton>
    </div>
  )
}

export default CartDropdown

import React from 'react'
import PropTypes from 'prop-types'
import classes from './CartItem.module.css'

const CartItem = ({ item }) => {
  const { name, imageUrl, price, count } = item
  return (
    <div className={classes.CartItem}>
      <img src={imageUrl} alt={name} />
      <div className={classes.CartItem__details}>
        <span className={classes.CartItem__name}>{name}</span>
        <span className={classes.CartItem__price}>
          {count} x ${price}
        </span>
      </div>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.items
}

export default CartItem

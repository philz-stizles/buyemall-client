import Link from 'next/link'
import Image from 'next/image'
import React, { Fragment, useContext } from 'react'
import { useSession } from 'next-auth/client'
import CartIcon from '../../cart/CartIcon/CartIcon'
import SearchIcon from '../../icons/SearchIcon'
import UserIcon from '../../icons/UserIcon'
import CartDropdown from './../../cart/CartDropdowm/CartDropdown'
import classes from './HomeHeader.module.css'
import CartContext from '../../../store/context/cart/cartContext'
import Backdrop from '../../ui/Backdrop'

const HomeHeader = () => {
  const [session] = useSession()
  const { isShowing, toggleCartIsShowing } = useContext(CartContext)

  return (
    <div className={classes.Container}>
      <div className={classes.BrandArea}>
        <Image src="/logo/crown.svg" alt="Logo" width={60} height={60} objectFit="contain" />
      </div>
      <div className={classes.SearchArea}>
        <div className={classes.Search}>
          <SearchIcon />
          <input type="search" placeholder="Search our amazing collection" />
        </div>
      </div>
      <div className={classes.UserArea}>
        {!session && (
          <Link href="/account">
            <a className={classes.UserArea__account}>Login / Register</a>
          </Link>
        )}
        {session && (
          <Link href="/user/dashboard">
            <a className={classes.UserArea__user}>
              Account <UserIcon />
            </a>
          </Link>
        )}
        <CartIcon />
      </div>
      {isShowing ? (
        <Fragment>
          <Backdrop isShowing={isShowing} transparent onClick={() => toggleCartIsShowing()} />
          <CartDropdown />
        </Fragment>
      ) : null}
    </div>
  )
}

export default HomeHeader

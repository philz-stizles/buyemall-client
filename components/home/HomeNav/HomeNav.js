import React from 'react'
import Link from 'next/link'
import classes from './HomeNav.module.css'

const HomeNav = () => {
  return (
    <nav className={classes.HomeNav}>
      <ul className={classes.NavList}>
        <li className={classes.NavItem}>
          <Link href="/">
            <a className={classes.NavLink}>Home</a>
          </Link>
        </li>
        <li className={classes.NavItem}>
          <Link href="/">
            <a className={classes.NavLink}>About</a>
          </Link>
        </li>
        <li className={classes.NavItem}>
          <Link href="/">
            <a className={classes.NavLink}>Products</a>
          </Link>
        </li>
        <li className={classes.NavItem}>
          <Link href="/">
            <a className={classes.NavLink}>Shoes</a>
          </Link>
        </li>
        <li className={classes.NavItem}>
          <Link href="/">
            <a className={classes.NavLink}>Shops</a>
          </Link>
        </li>
        <li className={classes.NavItem}>
          <Link href="/">
            <a className={classes.NavLink}>Blog</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default HomeNav

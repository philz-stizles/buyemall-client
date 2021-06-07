import React, { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LoginForm from '../../components/account/LoginForm/LoginForm'
import RegisterForm from '../../components/account/RegisterForm/RegisterForm'
import classes from './../../styles/Account.module.css'

const AccountPage = () => {
  return (
    <Fragment>
      <nav className={classes.AccountPageNav}>
        <Link href="/">
          <a>
            <Image src="/logo/crown.svg" alt="Logo" width={60} height={60} objectFit="contain" />
          </a>
        </Link>
      </nav>
      <div className={classes.AccountPage}>
        <div className={classes.AccountPageLogin}>
          <LoginForm />
        </div>
        <div className={classes.AccountPageRegister}>
          <RegisterForm />
        </div>
      </div>
    </Fragment>
  )
}

export default AccountPage

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import { signOut } from 'next-auth/client'
import classes from './DashboardNav.module.css'
import LinkButton from '../../buttons/LinkButton/LinkButton'

const DashboardNav = ({ onClick, session }) => {
  console.log(session)
  const handleSignOut = () => {
    signOut()
  }

  return (
    <nav className={classes.Nav}>
      <div className="Nav__brand">
        <Link href="/">
          <a>Devdezyn.io</a>
        </Link>
      </div>

      <div className="Nav__menu-bar" onClick={onClick} aria-hidden="true">
        <i className="las la-bars" />
      </div>

      <div className="Nav__search">
        <input type="search" placeholder="Search" />
      </div>

      <div className="Nav__user">
        <Link href="/user/profile">
          <a>
            {session.user.email}
            <Image src={`/images/avatar.svg`} width={30} height={30} alt="User image" />
          </a>
        </Link>
        <LinkButton onClick={handleSignOut}>Sign out</LinkButton>
      </div>

      <style jsx>{`
        .Nav__brand a {
          font-size: 2.4rem;
          padding: 0.75rem 1.5rem;
        }

        .Nav__menu-bar {
          padding: 0.75rem 1.5rem;
          display: flex;
          align-items: center;
        }

        .Nav__menu-bar > i {
          font-size: 2.4rem;
        }

        .Nav__search {
          display: flex;
          flex: 1;
        }

        .Nav__search input {
          display: block;
          font-size: 1.6rem;
          padding: 1.85rem 1.1rem;
          width: 100%;
          background-color: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.1);
          color: #fff;
          height: calc(2.25rem + 2px);
          line-height: 1.5;
          background-clip: padding-box;
          transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
        }

        .Nav__user {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .Nav__user > a {
          color: rgba(255, 255, 255, 0.5);
          display: block;
          padding: 0.5rem 1.2rem;
          font-size: 1.6rem;
        }
      `}</style>
    </nav>
  )
}

DashboardNav.propTypes = {
  onClick: PropTypes.func.isRequired,
  session: PropTypes.object.isRequired
}

export default DashboardNav

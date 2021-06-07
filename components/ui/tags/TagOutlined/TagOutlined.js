import React from 'react'
import Link from 'next/link'
import classes from './TagOutlined.module.css'

const TagOutlined = ({text, href}) => {
  return (
    <Link href={href}><a className={classes.link}>{text}</a></Link>
  )
}

export default TagOutlined

import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

const Avatar = ({ src, size, shape }) => {
  console.log(src)
  return (
    <div className="Avatar">
      <Image src={src} width={size} height={size} />
      <style>{`.Avatar {}`}</style>
    </div>
  )
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.number,
  shape: PropTypes.string
}

export default Avatar

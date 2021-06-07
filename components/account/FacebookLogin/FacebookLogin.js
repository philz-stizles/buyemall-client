import React from 'react'
import { signIn } from 'next-auth/client'
import SquareButton from '../../ui/buttons/SquareButton/SquareButton'

const FacebookLogin = () => {
  return <SquareButton onClick={() => signIn('facebook')}>Login with Facebook</SquareButton>
}

export default FacebookLogin

import React from 'react'
import { signIn } from 'next-auth/client'
import SquareButton from '../../ui/buttons/SquareButton/SquareButton'

const InstagramLogin = () => {
  return <SquareButton onClick={() => signIn('instagram')}>Login with Instagram</SquareButton>
}

export default InstagramLogin

import React from 'react'
import { signIn } from 'next-auth/client'
import SquareButton from '../../ui/buttons/SquareButton/SquareButton'

const GoogleLogin = ({ icon, color }) => {
  return <SquareButton onClick={() => signIn('google')}>Login with Google</SquareButton>
}

export default GoogleLogin

import React from 'react'
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import SquareButton from '../../ui/buttons/SquareButton/SquareButton'
// import LineInput from '../../ui/inputs/LineInput/LineInput'

const LoginForm = () => {
  const [loginForm, setLoginForm] = React.useState({
    email: 'theophilusighalo@gmail.com',
    password: '12345678'
  })
  const router = useRouter()
  const { email, password } = loginForm

  const submitLoginForm = async (e) => {
    e.preventDefault()

    console.log(loginForm)
    try {
      const response = await signIn('credentials', {
        // Response will always return an object, however if thereis an error,
        // there will be an error property in the object
        redirect: false, // by default, when we encounter an error during signin, next-auth will redirect
        // Here we do not want to redirect from the login page, thus we set this to false.
        email,
        password
      })

      console.log(response)

      if (response.error) {
        console.log(response.error)
      } else {
        router.replace('/admin/dashboard')
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div data-test="login-form" className="LoginForm">
      <h2>Login to your account</h2>
      <form onSubmit={submitLoginForm}>
        <div className="LineInput">
          <input
            id="lf-email"
            type="email"
            required
            name="email"
            value={email}
            onChange={(e) => setLoginForm({ ...loginForm, [e.target.name]: e.target.value })}
            autoComplete="off"
          />
          <label htmlFor="lf-email">Email Address</label>
        </div>

        <div className="LineInput">
          <input
            id="lf-password"
            type="password"
            required
            value={password}
            onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
          />
          <label htmlFor="lf-password">Password</label>
        </div>

        <div className="LoginButton">
          <SquareButton expanded>LOGIN</SquareButton>
        </div>
      </form>
      <style jsx>{`
        .LoginForm {
          padding: 1.5rem;
          border-radius: 6px;
          width: 45rem;
          margin-top: 8rem;
        }

        .LoginForm h2 {
          font-weight: 700;
          font-size: 2.6rem;
          margin-bottom: 2rem;
          text-align: center;
        }

        .LoginButton {
          margin-top: 7rem;
        }
      `}</style>
    </div>
  )
}

export default LoginForm

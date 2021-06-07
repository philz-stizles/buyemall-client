import React, { useState } from 'react'
import SquareButton from '../../ui/buttons/SquareButton/SquareButton'
import LineInput from '../../ui/inputs/LineInput/LineInput'
import SelectInput from '../../ui/inputs/SelectInput/SelectInput'

const RegisterForm = () => {
  const [registerForm, setRegisterForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    accountType: 'Customer'
  })
  const { firstname, lastname, email, password, accountType } = registerForm

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setRegisterForm({ ...registerForm, [name]: value })
  }

  const submitForm = async (e) => {
    e.preventDefault()

    console.log(registerForm)
    try {
      const response = await fetch('api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registerForm)
      })

      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong')
      }

      console.log(data)
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="RegisterForm">
      <h2>Create an account</h2>
      <form onSubmit={submitForm}>
        <LineInput
          id="rc-fname"
          type="text"
          label="First name"
          required
          name="firstname"
          value={firstname}
          placeholder="example@email.com"
          onChange={handleInputChange}
        />
        <LineInput
          id="rc-lname"
          type="text"
          label="Last name"
          required
          name="lastname"
          value={lastname}
          placeholder="example@email.com"
          onChange={handleInputChange}
        />
        <LineInput
          id="rc-email"
          type="email"
          label="Email address"
          required
          name="email"
          value={email}
          placeholder="example@email.com"
          onChange={handleInputChange}
        />
        <LineInput
          id="rc-password"
          type="password"
          label="Password"
          required
          name="password"
          value={password}
          placeholder="*************"
          onChange={handleInputChange}
        />
        <SelectInput
          name="accountType"
          value={accountType}
          onChange={handleInputChange}
          label="Select the type of account you want to create"
        />
        <div className="RegisterButton">
          <SquareButton expanded>REGISTER</SquareButton>
        </div>
      </form>
      <style jsx>{`
        .RegisterForm {
          padding: 1.5rem;
          border-radius: 6px;
          // border: 1px solid rgb(234, 234, 234);
          width: 45rem;
          margin-top: 8rem;
        }

        .RegisterForm h2 {
          text-align: center;
          font-weight: 700;
          font-size: 2.6rem;
          margin-bottom: 2rem;
        }

        .RegisterForm select {
          display: inline-block;
          padding: 10px 30px;
          line-height: normal;
          text-transform: uppercase;
          cursor: pointer;
          border: 2px solid #121212;
          color: #121212;
          margin-top: 3rem;
          transition: background-color 0.4s ease-in-out, color 0.4s ease-in-out,
            border-color 0.4s ease-in-out;
        }

        .RegisterButton {
          margin-top: 3rem;
        }
      `}</style>
    </div>
  )
}

export default RegisterForm

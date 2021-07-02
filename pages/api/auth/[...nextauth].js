import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'
import User from '../../../models/user'
import connectDbAsync from './../../../lib/mongoose'
import { verifyPasswordAsync } from '../../../lib/auth'

export default NextAuth({
  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `jwt` is automatically set to `true` if no database is specified.
    jwt: true,
    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 60 // 30mins
    // maxAge: 60 // 60seconds
  },
  jwt: {
    secret: process.env.JWT_SECRET
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const { email, password } = credentials

        if (email && password) {
          try {
            await connectDbAsync()

            // Check if user exists
            const existingUser = await User.findOne({ email }).exec()
            if (!existingUser) {
              throw new Error('Email/password incorrect!')
            }

            // Compare password
            const isMatch = await verifyPasswordAsync(password, existingUser.password)
            if (!isMatch) {
              throw new Error('Email/password incorrect!')
            }

            return {
              email: existingUser.email,
              name: `${existingUser.firstname} ${existingUser.lastname}`,
              image: existingUser.avatar
            }
          } catch (error) {
            console.log(error.message)
            throw new Error('Something went wrong. Please try again later')
          }
        }
      }
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    async jwt(token, user, account, profile, isNewUser) {
      console.log('token', token)
      console.log('user', user)
      console.log('account', account)
      console.log('profile', profile)
      console.log('isNewUser', isNewUser)

      if (account?.accessToken) {
        token.accessToken = account.accessToken
      }
      if (user?.roles) {
        token.roles = user.roles
      }
      return token
    },
    async session(session, token) {
      if (token?.accessToken) {
        session.accessToken = token.accessToken
      }
      if (token?.roles) {
        session.user.roles = token.roles
      }
      return session
    }
  }
})

import { hashPasswordAsync } from '../../../lib/auth'
import connectDbAsync from '../../../lib/mongoose'
import User from '../../../models/user'

const handler = async (req, res) => {
  try {
    if (req.method === 'POST') {
      const { firstname, lastname, email, password, accountType } = req.body

      if (
        !firstname ||
        !lastname ||
        !email ||
        !email.includes('@') ||
        !password ||
        password.trim().length < 7
      ) {
        return res.status(422).json({ message: 'Invalid credentials' })
      }

      // Check user
      await connectDbAsync()
      const existingUser = await User.findOne({ email }).exec()
      if (existingUser) {
        return res.status(422).json({ message: 'User already exists' })
      }

      // Hash password
      const hashedPassword = await hashPasswordAsync(password)

      const newUser = new User({
        firstname,
        lastname,
        email,
        password: hashedPassword,
        accountType
      })
      await newUser.save()

      return res.status(201).json({ message: 'New user created' })
    }
  } catch (error) {
    console.log(error.message)
    return res.status(500).json({ message: error.message || 'Something went wrong' })
  }
}

export default handler

import { getSession } from 'next-auth/client'
import User from '../../../../models/user'
import connectDB from '../../../../middleware/mongoose-middleware'

const handler = async (req, res) => {
  const session = await getSession({ req })

  if (session) {
    switch (req.method) {
      case 'GET': {
        try {
          const existingUser = await User.findOne({ email: session.user.email })
            .select('wishList')
            .populate('wishList')
            .exec()
          if (!existingUser) {
            return res.status(401).json({ message: 'User does not exist' })
          }

          return res.json({ status: true, data: existingUser, message: 'Retrieved successfully' })
        } catch (error) {
          console.log(error.message)
          return res.status(500).json({
            status: false,
            message: 'This service cannot be reached at this time. Please try again later'
          })
        }
      }
      default: {
        break
      }
    }
  } else {
    res
      .status(401)
      .json({ status: false, message: 'Please make sure you are authenticated, then try again' })
  }

  res.end()
}

export default connectDB(handler)

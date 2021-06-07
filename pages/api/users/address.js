import { getSession } from 'next-auth/client'
import User from '../../../../models/user'
import connectDB from './../../../middleware/mongoose-middleware'

const handler = async (req, res) => {
  const session = await getSession()

  if (session) {
    if (req.method === 'PUT') {
      try {
        const { address } = req.body
        const updatedUser = await User.findOneAndUpdate(
          { email: session.user.email },
          {
            address
          }
        ).exec()
        console.log(updatedUser)
        if (!updatedUser) {
          return res.status(400).json({ message: 'Updated failed' })
        }

        return res.json({ status: true, message: 'Updated Successfully' })
      } catch (error) {
        console.log(error.message)
        return res.status(500).json({
          status: false,
          message: 'This service cannot be reached at this time. Please try again later'
        })
      }
    }
  } else {
    return res
      .status(401)
      .json({ status: false, message: 'Please make sure you are authenticated, then try again' })
  }
}

export default connectDB(handler)

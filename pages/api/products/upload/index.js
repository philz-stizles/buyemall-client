import { getSession } from 'next-auth/client'
import User from '../../../../models/user'
import connectDB from '../../../../middleware/mongoose-middleware'
import * as cloudinaryService from '../../../../services/cloudinaryService'

const handler = async (req, res) => {
  const session = await getSession({ req })

  if (session) {
    switch (req.method) {
      case 'POST': {
        try {
          // Validate user - user must exist
          const existingUser = await User.findOne({ email: session.user.email }).exec()
          if (!existingUser) {
            return res.status(422).json({ message: 'User does not exist' })
          }

          // Upload file to storage
          const { image } = req.body
          const result = await cloudinaryService.uploadFileAsync(image)

          return res.json({
            status: true,
            data: { upload_id: result.public_id, url: result.secure_url },
            message: 'Uploaded Successfully'
          })
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

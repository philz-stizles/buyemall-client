import { getSession } from 'next-auth/client'
import User from '../../../../models/user'
import connectDB from '../../../../middleware/mongoose-middleware'

const handler = async (req, res) => {
  const session = await getSession({ req })

  if (session) {
    switch (req.method) {
      case 'POST': {
        const { email, firstname, lastname, phone } = req.body

        if (!email || email.trim().length !== '') {
          return res.status(422).json({ message: 'Please input valid information' })
        }

        try {
          // Validate user - user must exist
          const existingUser = await User.findOne({ email: session.user.email })
          if (!existingUser) {
            return res.status(422).json({ message: 'User does not exist' })
          }

          const newUser = await User.findOne({ email }).exec()
          if (newUser) {
            return res.status(422).json({ message: 'User already exists' })
          }

          const newEntity = new User({
            email,
            phone,
            firstname,
            lastname,
            createdBy: existingUser._id
          })
          await newEntity.save()

          return res.status(201).json({ status: true, message: 'Created Successfully' })
        } catch (error) {
          console.log(error.message)
          return res.status(500).json({
            status: false,
            message: 'This service cannot be reached at this time. Please try again later'
          })
        }
      }
      case 'DELETE': {
        try {
          // Validate user - user must exist
          const existingUser = await User.findOne({ email: session.user.email })
          if (!existingUser) {
            return res.status(422).json({ message: 'User does not exist' })
          }

          // OPTION 2: findOneAndRemove()
          const removedEntity = User.findOneAndRemove({ createdBy: existingUser._id })
          if (!removedEntity) {
            console.log(removedEntity)
            return res.status(422).json({ status: false, message: 'Resource was not found' })
          }
          return res.json({ status: true, data: removedEntity, message: 'Removed Successfully' })
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

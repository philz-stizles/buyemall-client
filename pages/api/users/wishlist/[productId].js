import { getSession } from 'next-auth/client'
import User from '../../../../models/user'
import connectDB from '../../../../middleware/mongoose-middleware'
import Product from '../../../../models/product'

const handler = async (req, res) => {
  const session = await getSession({ req })

  if (session) {
    switch (req.method) {
      case 'PUT': {
        try {
          const { productId } = req.query

          // Validate user - user must exist
          const existingUser = await User.findOne({ email: session.user.email }).exec()
          if (!existingUser) {
            return res.status(401).json({ message: 'User does not exist' })
          }

          // Validate entity - entity must exist
          const existingProduct = await Product.findById(productId).exec()
          if (!existingProduct) {
            return res.status(404).json({ status: false, message: 'Resource was not found' })
          }

          await User.findOneAndUpdate(
            { email: existingUser.email },
            {
              $addToSet: { wishList: productId }
            }
          ).exec()

          return res.json({ status: true, message: 'Updated Successfully' })
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
          const { productId } = req.query

          // Validate user - user must exist
          const existingUser = await User.findOne({ email: session.user.email })
          if (!existingUser) {
            return res.status(422).json({ message: 'User does not exist' })
          }

          // OPTION 2: findOneAndRemove()
          await User.findOneAndUpdate(
            { email: existingUser.email },
            {
              $pull: { wishList: productId }
            }
          ).exec()

          return res.json({ status: true, message: 'Removed Successfully' })
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

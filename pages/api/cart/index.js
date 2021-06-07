import { getSession } from 'next-auth/client'
const slugify = require('slugify')
import User from '../../../models/user'
import Cart from '../../../models/cart'
import connectDB from '../../../middleware/mongoose-middleware'

const handler = async (req, res) => {
  const session = await getSession({ req })
  if (session) {
    switch (req.method) {
      case 'POST': {
        const { cartItems, totalAmount, category, subCategory } = req.body

        if (!title || title.trim().length !== '' || !category || category.trim().length !== '') {
          return res.status(422).json({ message: 'Please input valid information' })
        }

        try {
          // Validate user - user must exist
          const existingUser = await User.findOne({ email: session.user.email }).exec()
          if (!existingUser) {
            return res.status(422).json({ message: 'User does not exist' })
          }

          const newEntity = new Cart({
            title,
            description,
            category,
            subCategory,
            slug: slugify(title),
            creator: existingUser._id
          })
          await newEntity.save()

          return res.status(201).json({ status: true, message: 'Created Successfully' })
        } catch (error) {
          console.log(`subCategories ${error.message}`)
          return res.status(500).json({
            status: false,
            message: 'This service cannot be reached at this time. Please try again later'
          })
        }
      }
      case 'GET': {
        try {
          // Validate user - user must exist
          const existingUser = await User.findOne({ email: session.user.email }).exec()
          if (!existingUser) {
            return res.status(422).json({ message: 'User does not exist' })
          }

          const userCart = await Cart.findOne({ owner: existingUser._id })
            .populate('cartItems.product', '_id, title, price')
            .exec() // The advantage of using exec() is
          // gives you better stack traces

          return res.json({ status: true, data: userCart, message: 'Retrieved successfully' })
        } catch (error) {
          console.log(error.message)
          return res.status(500).json({
            status: false,
            message: 'This service cannot be reached at this time. Please try again later'
          })
        }
      }
      case '  DELETE': {
        try {
          // Validate user - user must exist
          const existingUser = await User.findOne({ email: session.user.email }).exec()
          if (!existingUser) {
            return res.status(422).json({ message: 'User does not exist' })
          }

          const removedCart = await Cart.findOneAndRemove({ owner: existingUser._id }).exec()
          if (!removedCart) {
            return res.status(400).json({ message: 'Remove failed' })
          }

          return res.json({ status: true, data: removedCart, message: 'Removed successfully' })
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
    return res.status(401).json({
      status: false,
      message: 'Please make sure you are authenticated, then try again'
    })
  }
}

export default connectDB(handler)

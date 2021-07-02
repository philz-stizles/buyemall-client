import { getSession } from 'next-auth/client'
const slugify = require('slugify')
import User from '../../../models/user'
import Product from '../../../models/product'
import connectDB from '../../../middleware/mongoose-middleware'

const handler = async (req, res) => {
  const session = await getSession({ req })
  const slug = req.query.slug.toLowerCase()
  const _id = req.query.slug

  if (req.method === 'GET') {
    try {
      // const entity = await Product.findOne({ slug })
      const entity = await Product.findById(_id)
        .populate('category')
        .populate('subCategories')
        .exec()

      return res.json({ status: true, data: entity, message: 'Retrieved successfully' })
    } catch (error) {
      console.log(`subCategories/[slug] ${error.message}`)
      return res.status(500).json({
        status: false,
        message: 'This service cannot be reached at this time. Please try again later'
      })
    }
  }

  if (session) {
    switch (req.method) {
      case 'PUT': {
        try {
          if (req.body.title) {
            req.body.slug = slugify(req.body.title)
          }
          // Validate user - user must exist
          const existingUser = await User.findOne({ email: session.user.email }).exec()
          if (!existingUser) {
            return res.status(422).json({ message: 'User does not exist' })
          }

          // UPDATE METHOD 2 - findOneAndUpdate()
          const updatedEntity = await Product.findOneAndUpdate(
            { _id: slug, creator: existingUser._id },
            req.body,
            { new: true }
          ).exec()
          if (!updatedEntity) {
            console.log(updatedEntity)
            return res.status(422).json({ status: false, message: 'Resource was not found' })
          }

          return res.json({ status: true, data: updatedEntity, message: 'Updated Successfully' })
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

          // REMOVE/DELETE METHOD 2: findOneAndRemove() // returns null if no resource was deleted
          const removedEntity = await Product.findOneAndRemove({
            _id: slug,
            createdBy: existingUser._id
          }).exec()
          if (!removedEntity) {
            console.log(removedEntity)
            return res.status(404).json({ status: false, message: 'Resource was not found' })
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

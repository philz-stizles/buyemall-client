import { getSession } from 'next-auth/client'
const slugify = require('slugify')
import User from '../../../models/user'
import SubCategory from '../../../models/subCategory'
import connectDB from '../../../middleware/mongoose-middleware'

const handler = async (req, res) => {
  const session = await getSession({ req })
  const slug = req.query.slug.toLowerCase()

  if (req.method === 'GET') {
    try {
      const entity = await SubCategory.findOne({ slug }).exec()

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
        const { name, category } = req.body

        if (!name || name.trim().length !== '' || !category || category.trim().length !== '') {
          return res.status(422).json({ message: 'Please input valid information' })
        }

        try {
          // Validate user - user must exist
          const existingUser = await User.findOne({ email: session.user.email }).exec()
          if (!existingUser) {
            return res.status(422).json({ message: 'User does not exist' })
          }

          // OPTION 1
          // Validate entity - entity must exist
          const existingEntity = await SubCategory.findOne({
            slug,
            creator: existingUser._id
          }).exec()
          if (!existingEntity) {
            return res.status(422).json({ status: false, message: 'Resource was not found' })
          }

          existingEntity.name = name
          existingEntity.category = category
          existingEntity.slug = slugify(name)
          await existingEntity.save()

          return res.json({ status: true, message: 'Updated Successfully' })

          // OPTION 2 - findOneAndUpdate()
          // const updatedEntity = await SubCategory.findOneAndUpdate(
          //   { slug, creator: existingUser._id },
          //   { name, category, slug: slugify(name) },
          //   { new: true }
          // ).exec()
          // if (!updatedEntity) {
          //   console.log(updatedEntity)
          //   return res.status(422).json({ status: false, message: 'Resource was not found' })
          // }
          // return res.json({ status: true, data: updatedEntity, message: 'Updated Successfully' })
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

          // OPTION 1: remove()
          // Validate entity - entity must exist
          const existingEntity = await SubCategory.findOne({ slug, creator: existingUser._id })
          if (!existingEntity) {
            return res.status(422).json({ status: false, message: 'Resource was not found' })
          }

          await SubCategory.remove(existingEntity)

          // OPTION 2: findOneAndRemove()
          // const removedEntity = SubCategory.findOneAndRemove({ slug, creator: existingUser._id })
          // if (!removedEntity) {
          //   console.log(removedEntity)
          //   return res.status(422).json({ status: false, message: 'Resource was not found' })
          // }
          // return res.json({ status: true, data: removedEntity, message: 'Removed Successfully' })

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

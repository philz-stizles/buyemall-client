import { getSession } from 'next-auth/client'
import jwt from 'next-auth/jwt'
const slugify = require('slugify')
import User from './../../../models/user'
import SubCategory from './../../../models/subCategory'
import connectDB from '../../../middleware/mongoose-middleware'

const secret = process.env.JWT_SECRET

const handler = async (req, res) => {
  const session = await getSession({ req })
  const token = await jwt.getToken({ req, secret })
  console.log(token)
  switch (req.method) {
    case 'POST': {
      if (session) {
        const { name, category } = req.body

        if (!name || name.trim().length === '' || !category || category.trim().length === '') {
          return res.status(422).json({ message: 'Please input valid information' })
        }

        try {
          // Validate user - user must exist
          const existingUser = await User.findOne({ email: session.user.email }).exec()
          if (!existingUser) {
            return res.status(422).json({ message: 'User does not exist' })
          }

          const newEntity = new SubCategory({
            name,
            category,
            slug: slugify(name),
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
      } else {
        return res.status(401).json({
          status: false,
          message: 'Please make sure you are authenticated, then try again'
        })
      }
    }
    case 'GET': {
      try {
        const entities = await SubCategory.find({})
          .sort({ createdAt: -1 })
          .populate('creator', 'email')
          .populate('category', 'name')
          .exec() // The advantage of using exec() is
        // gives you better stack traces

        return res.json({ status: true, data: entities, message: 'Retrieved successfully' })
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

  res.end()
}

export default connectDB(handler)

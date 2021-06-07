import { getSession } from 'next-auth/client'
const slugify = require('slugify')
import User from '../../../models/user'
import Product from '../../../models/subCategory'
import connectDB from '../../../middleware/mongoose-middleware'

const handler = async (req, res) => {
  const session = await getSession({ req })
  switch (req.method) {
    case 'POST': {
      if (session) {
        const { title, description, category, subCategory } = req.body

        if (!title || title.trim().length !== '' || !category || category.trim().length !== '') {
          return res.status(422).json({ message: 'Please input valid information' })
        }

        try {
          // Validate user - user must exist
          const existingUser = await User.findOne({ email: session.user.email }).exec()
          if (!existingUser) {
            return res.status(422).json({ message: 'User does not exist' })
          }

          const newEntity = new Product({
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
      } else {
        return res.status(401).json({
          status: false,
          message: 'Please make sure you are authenticated, then try again'
        })
      }
    }
    case 'GET': {
      try {
        const entities = await Product.find({})
          .limit(parseInt(req.query.limit))
          .populate('category')
          .populate('subCategories')
          .sort([['createdAt', 'desc']])
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

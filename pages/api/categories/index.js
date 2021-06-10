import { getSession } from 'next-auth/client'
const slugify = require('slugify')
import User from './../../../models/user'
import Category from './../../../models/category'
import connectDbAsync from '../../../lib/mongoose'

const handler = async (req, res) => {
  const session = await getSession({ req })
  switch (req.method) {
    case 'POST': {
      if (session) {
        const { name, description } = req.body

        if (!name || name.trim().length === '') {
          return res.status(422).json({ message: 'Please input valid information' })
        }

        try {
          await connectDbAsync()
          // Validate user - user must exist
          const existingUser = await User.findOne({ email: session.user.email }).exec()
          if (!existingUser) {
            return res.status(422).json({ message: 'User does not exist' })
          }

          const newEntity = new Category({
            name,
            description,
            slug: slugify(name),
            creator: existingUser._id
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
      } else {
        return res.status(401).json({
          status: false,
          message: 'Please make sure you are authenticated, then try again'
        })
      }
    }
    case 'GET': {
      try {
        await connectDbAsync()
        const entities = await Category.find({}).populate('creator', 'email').exec()
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

export default handler

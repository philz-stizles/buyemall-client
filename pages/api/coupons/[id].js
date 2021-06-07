import { getSession } from 'next-auth/client'
import User from '../../../../models/user'
import Coupon from './../../../models/coupon'
import connectDB from '../../../../middleware/mongoose-middleware'

const handler = async (req, res) => {
  const session = await getSession({ req })
  const _id = req.query.id

  if (req.method === 'GET') {
    try {
      const entity = await Coupon.findById(_id).exec()

      return res.json({ status: true, data: entity, message: 'Retrieved successfully' })
    } catch (error) {
      console.log(error.message)
      return res.status(500).json({
        status: false,
        message: 'This service cannot be reached at this time. Please try again later'
      })
    }
  }

  if (session) {
    switch (req.method) {
      case 'PUT': {
        const { name, expiry, discount } = req.body

        if (!name || name.trim().length !== '' || !expiry || !discount) {
          return res.status(422).json({ message: 'Please input valid information' })
        }

        try {
          // Validate user - user must exist
          const existingUser = await User.findOne({ email: session.user.email }).exec()
          if (!existingUser) {
            return res.status(422).json({ message: 'User does not exist' })
          }

          // Validate entity - entity must exist
          const existingEntity = await Coupon.findOne({ _id, creator: existingUser._id }).exec()
          if (!existingEntity) {
            return res.status(422).json({ status: false, message: 'Resource was not found' })
          }

          existingEntity.name = name
          existingEntity.expiry = expiry
          existingEntity.discount = discount
          await existingEntity.save()

          return res.status(201).json({ status: true, message: 'Updated Successfully' })
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
          const removedEntity = Coupon.findOneAndDelete({ _id, creator: existingUser._id })
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

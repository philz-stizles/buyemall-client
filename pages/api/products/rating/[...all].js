import { getSession } from 'next-auth/client'
import User from '../../../../models/user'
import Product from '../../../../models/product'
import connectDB from '../../../../middleware/mongoose-middleware'

const handler = async (req, res) => {
  const session = await getSession({ req })

  if (session) {
    if (req.method === 'PUT') {
      try {
        // Validate user - user must exist
        const existingUser = await User.findOne({ email: session.user.email }).exec()
        if (!existingUser) {
          return res.status(422).json({ message: 'User does not exist' })
        }

        const [productId, rating] = req.query.all

        // Validate product - product must exist
        const existingProduct = await Product.findById(productId).exec()
        if (!existingProduct) {
          return res.status(404).json({ message: 'Resource does not exist' })
        }

        // check if currently logged in user have already added rating to this product?
        const existingRating = existingProduct.ratings.find(
          (rating) => rating.postedBy === existingUser._id
        )
        if (!existingRating) {
          const updatedProduct = await Product.findByIdAndUpdate(
            existingProduct._id,
            {
              $push: { ratings: { rating, postedBy: existingUser._id } }
            },
            { new: true }
          ).exec()
          return res.json({
            status: true,
            data: updatedProduct,
            message: 'You have submitted your rating'
          })
        } else {
          const updatedProduct = await Product.updateOne(
            {
              ratings: { $elemMatch: existingRating }
            },
            {
              $set: { 'ratings.$.rating': rating }
            },
            { new: true }
          ).exec()
          return res.json({
            status: true,
            data: updatedProduct,
            message: 'You have submitted your rating'
          })
        }
      } catch (error) {
        console.log(error.message)
        return res.status(500).json({
          status: false,
          message: 'This service cannot be reached at this time. Please try again later'
        })
      }
    } else {
      return res.status(404).json({
        status: false,
        message: 'Resource/service does not exist'
      })
    }
  } else {
    res
      .status(401)
      .json({ status: false, message: 'Please make sure you are authenticated, then try again' })
  }

  res.end()
}

export default connectDB(handler)

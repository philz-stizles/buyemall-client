import Product from '../../../models/subCategory'
import connectDB from '../../../middleware/mongoose-middleware'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { page, limit: itemsPerPage, order, sort } = req.body
      const limit = itemsPerPage || 3
      const skip = ((page || 1) - 1) * limit
      const entities = await Product.find({})
        .skip(skip)
        .limit(limit)
        .populate('category')
        .populate('subCategories')
        .sort([[sort, order]])
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
  } else {
    return res.status(404).json({
      status: false,
      message: 'Resource/service does not exist'
    })
  }
}

export default connectDB(handler)

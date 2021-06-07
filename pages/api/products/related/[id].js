import Product from '../../../../models/product'
import connectDB from '../../../../middleware/mongoose-middleware'

const handler = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const { id } = req.query
      // Validate product - product must exist
      const existingProduct = await Product.findById(id).exec()
      if (!existingProduct) {
        return res.status(404).json({ message: 'Resource does not exist' })
      }

      const { limit: itemsPerPage } = req.body
      const limit = itemsPerPage || 3
      const relatedProducts = Product.find({})
        .limit(limit)
        .populate('category')
        .populate('subCategories')
        .populate('createdBy')
        .exec()

      return res.json({
        status: true,
        data: relatedProducts,
        message: 'Retrieved Successfully'
      })
    } catch (error) {
      console.log(error.message)
      return res.status(500).json({
        status: false,
        message: 'This service cannot be reached at this time. Please try again later'
      })
    }
  }
}

export default connectDB(handler)

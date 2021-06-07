import SubCategory from '../../../../models/subCategory'
import connectDB from '../../../../middleware/mongoose-middleware'

const handler = async (req, res) => {
  const id = req.query.id

  if (req.method === 'GET') {
    try {
      const entities = await SubCategory.find({ category: id }).exec()

      return res.json({ status: true, data: entities, message: 'Retrieved successfully' })
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

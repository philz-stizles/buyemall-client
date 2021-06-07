import { getSession } from 'next-auth/client'
import connectDB from '../../../../middleware/mongoose-middleware'
import Order from '../../../../models/product'

const handler = async (req, res) => {
  const session = await getSession({ req })

  if (session) {
    switch (req.method) {
      case 'PUT': {
        try {
          const { orderId } = req.query
          const { orderStatus } = req.body
          let updatedEntity = await Order.findByIdAndUpdate(
            orderId,
            { orderStatus },
            { new: true }
          ).exec()

          return res.json({ status: true, data: updatedEntity, message: 'Updated Successfully' })
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

import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema

const orderSchema = new mongoose.Schema(
  {
    products: [
      { product: { type: ObjectId, ref: 'Product' }, count: Number, color: String, price: Number }
    ],
    paymentIntent: {},
    status: {
      type: String,
      default: 'Not Processed',
      enum: ['Not Processed', 'processing', 'Dispatched', 'Cancelled', 'Completed']
    },
    orderedBy: { type: ObjectId, ref: 'User' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Order', orderSchema)

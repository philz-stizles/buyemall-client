import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema

const cartSchema = new mongoose.Schema(
  {
    cartItems: [
      {
        product: { type: ObjectId, ref: 'Product' },
        count: Number,
        color: String,
        price: Number
      }
    ],
    totalAmount: Number,
    totalAmountAfterDiscount: Number,
    owner: { type: ObjectId, ref: 'User' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Cart', cartSchema)

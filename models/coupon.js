import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema

const couponSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: true,
      uppercase: true,
      required: 'Nmae is required',
      minlength: [6, 'Too short'],
      maxlength: [12, 'Too long']
    },
    expiry: { type: Date, required: true },
    discount: { type: Number, requred: true },
    creator: { type: ObjectId, ref: 'User' }
  },
  { timestamps: true }
)

mongoose.models = {}

const Coupon = mongoose.model('Coupon', couponSchema)
export default Coupon

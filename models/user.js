import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    address: {
      type: String
    },
    role: { type: String, default: 'subscriber' },
    accountType: {
      type: String,
      required: true,
      enum: ['customer', 'business', 'admin'],
      default: 'customer'
    },
    avatar: { data: Buffer, contentType: String },
    cart: { type: Array, default: [] },
    wishList: [{ type: mongoose.Schema.ObjectId, ref: 'Product' }],
    createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' } // [this] // Self referencing this schema
  },
  { timestamps: true }
)

mongoose.models = {}

const User = mongoose.model('User', userSchema)
export default User

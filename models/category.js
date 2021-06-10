import mongoose from 'mongoose'
import { userSchema } from './user'

const { ObjectId } = mongoose.Schema

export const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: 'Name is required',
      minlength: [2, 'Too short'],
      maxlength: [32, 'Too long']
    },
    description: {
      type: String,
      trim: true,
      maxlength: [32, 'Too long']
    },
    image: { url: String, publicId: String },
    slug: { type: String, unique: true, lowercase: true, index: true },
    creator: { type: ObjectId, ref: 'User' }
  },
  { timestamps: true }
)

mongoose.models = {}

mongoose.model('User', userSchema)
// const User = mongoose.model('User', userSchema)
const Category = mongoose.model('Category', categorySchema)
export default Category

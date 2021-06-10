import mongoose from 'mongoose'
import { categorySchema } from './category'
import { userSchema } from './user'

const { ObjectId } = mongoose.Schema

const subCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: 'Name is required',
      minlength: [2, 'Too short'],
      maxlength: [32, 'Too long']
    },
    slug: { type: String, unique: true, lowercase: true, index: true },
    category: { type: ObjectId, ref: 'Category', required: true },
    creator: { type: ObjectId, ref: 'User' }
  },
  { timestamps: true }
)

mongoose.models = {}
mongoose.model('User', userSchema)
mongoose.model('Category', categorySchema)

const SubCategory = mongoose.model('SubCategory', subCategorySchema)
export default SubCategory

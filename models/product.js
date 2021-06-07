import mongoose from 'mongoose'

const { ObjectId, Types } = mongoose.Schema

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      text: true
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true
    },
    description: {
      type: String,
      required: true,
      maxlength: 2000,
      text: true
    },
    price: {
      type: Number,
      required: true,
      trim: true,
      maxlength: 32
    },
    category: { type: ObjectId, ref: 'Category' },
    subCategories: [{ type: ObjectId, ref: 'SubCategory' }],
    quantity: Number,
    sold: { type: Number, default: 0 },
    images: [{ url: String, upload_id: Types.Mixed }], // mongoose.Schema.Types.Mixed means anythin goes
    shipping: { type: String, enum: ['Yes', 'No'] },
    color: {
      type: String,
      enum: ['Black', 'Brown', 'Silver', 'White', 'Blue']
    },
    brand: {
      type: String,
      enum: ['Apple', 'Samsung', 'Microsoft', 'Lenovo', 'ASUS']
    },
    ratings: [{ rating: Number, postedBy: { type: ObjectId, ref: 'User' } }],
    isPublished: { type: Boolean, enum: [true, false], default: false },
    createdBy: { type: ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
)

mongoose.models = {}

const Product = mongoose.model('Product', productSchema)
export default Product

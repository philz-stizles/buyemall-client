import mongoose from 'mongoose'

const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: 'Name is required',
      minlength: [2, 'Too short'],
      maxlength: [32, 'Too long']
    }
  },
  { timestamps: true }
)

mongoose.models = {}

const Role = mongoose.model('Role', roleSchema)
export default Role

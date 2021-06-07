import mongoose from 'mongoose'

const { ObjectId } = mongoose.Schema

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      text: true
    },
    location: {
      type: String
    },
    about: {
      type: String,
      maxlength: 2000,
      text: true
    },
    logo: { data: Buffer, contentType: String },
    ratings: [{ star: Number, postedBy: { type: mongoose.Schema.ObjectId, ref: 'User' } }],
    createdBy: { type: ObjectId, ref: 'User', required: true }
  },
  { timestamps: true }
)

mongoose.models = {}

const Company = mongoose.model('Company', companySchema)
export default Company

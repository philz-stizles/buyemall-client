import mongoose from 'mongoose'

const connectDB = async () => {
  if (mongoose.connections[0].readyState) {
    // Use current db connection
    return
  }

  // Use new db connection
  try {
    // Here is where we create a new connection. MONGODB_URL
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    })
    console.log('Connected to database.')
  } catch (error) {
    console.log('DB error', error)
  }
}

export default connectDB

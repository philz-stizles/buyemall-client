const cloudinary = require('cloudinary').v2

// config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
})

// req.files.file.path
exports.uploadFileAsync = async (file) => {
  try {
    return await cloudinary.uploader.upload(file, {
      public_id: `${Date.now()}`,
      resource_type: 'auto' // jpeg, png
    })
  } catch (error) {
    console.log(error.message)
    // return { error }
  }
}

exports.removeFileAsync = (upload_id, cb) => {
  cloudinary.uploader.destroy(upload_id, (err, result) => {
    if (err) return cb(err, null)
    return cb(null, result)
  })
}

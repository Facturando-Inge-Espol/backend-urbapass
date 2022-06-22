const multer = require('multer')
const path = require('path')

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true)
  } else {
    cb(new Error('Ingresar imagen únicamente'), false)
  }
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '/../uploads/'))
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-bezkoder-${file.originalname}`)
  }
})

const uploadFile = multer({
  storage,
  fileFilter: imageFilter
})
module.exports = uploadFile

import multer from 'multer'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'src/public/uploads/')
    },
    filename: function (req, file, cb) {
        const extension = file.originalname.split('.').pop()
        cb(null, `${Date.now()}.${extension}`)
    }
})

const fileFilter = function (req, file, cb) {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png']

    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true)
    } else {
        cb(new Error('Invalid file type. Only JPEG, JPG, and PNG files are allowed.'), false)
    }
}

export default multer({ storage: storage, fileFilter: fileFilter })
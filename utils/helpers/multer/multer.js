const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/') // Create an 'uploads' directory to store uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname) // Use a unique filename
    }
});

const upload = multer({ storage: storage });

module.exports = upload;
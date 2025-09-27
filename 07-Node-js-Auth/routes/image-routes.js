const express = require('express');
const authMiddleware = require('../middleware/auth-middleware');
const adminMiddleware = require('../middleware/auth-middleware');
const uploadMiddleware = require('../middleware/fileUpload-middleware');
const controller = require('../controller/image-controller');
const router = express.Router()

//upload the image
router.post('/upload', authMiddleware, adminMiddleware, uploadMiddleware.single('image'), controller.uploadImage)
//get all images
router.get('/get', authMiddleware, controller.fetchAllImage)


module.exports = router
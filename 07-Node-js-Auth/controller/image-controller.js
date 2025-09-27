const Image = require('../model/image');
const uploadToCloudinary = require('../helpers/cloudinaryHelper')
const fs = require('fs');
const uploadImage = async (req, res) => {
  try {
    // check if file is missong in req object
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'File is required. Please upload a file',
        data: null
      })
    }
    // upload to cloudinary
    const { url, publicId } = await uploadToCloudinary(req.file.path)

    //store the image url and publicId along with the uploaded user id in database

    // method 1--

    // const uploadedImage = await Image.create({
    //   url,
    //   publicId,
    //   uploadedBy: req.userInfo.userId
    // })

    //method 2--

    const uploadedImage = new Image({
      url,
      publicId,
      uploadedBy: req.userInfo.userId
    })

    await uploadedImage.save()

    // delete the image from system
    fs.unlink(req.file.path, (err) => {
      if (err) console.log('error while deleting file', err)
      console.log('file deleted successfully')
    })


    res.status(200).json({
      success: true,
      message: 'Image uploaded successfully',
      data: uploadedImage
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Something went wrong! Please try again.',
      error
    })
  }
}

const fetchAllImage = async (req, res) => {
  try {
    const images = await Image.find({})
    if (images.length === 0) {
      return res.status(200).json({
        success: true,
        message: 'No images found',
        data: []
      })
    }
    res.status(200).json({
      success: true,
      message: 'Images fetched successfully',
      data: images
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      success: false,
      message: 'Something went wrong! Please try again.',
      error
    })
  }
}


module.exports = { uploadImage, fetchAllImage }
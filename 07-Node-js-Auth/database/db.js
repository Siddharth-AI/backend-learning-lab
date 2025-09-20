const mongoose = require('mongoose');

const connectToDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL)
    console.log('mongodb connected successfully')
  } catch (error) {
    console.log('mongodb connection failed', error)
  }
}

module.exports = connectToDB;
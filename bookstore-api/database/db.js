const mongoose = require('mongoose');

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.URI)
    console.log("MongoDb is connected successfully !");
  }
  catch (err) {
    console.error('MongoDB connection failed', err);
    process.exit(1);
  }
}

module.exports = connectToDB;
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'username is required'],
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'email is required'],
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'password is required'],
    minLength: [8, 'password must be more then 8 charachter']
  },
  role: {
    type: String,
    enum: ['user', 'admin'], // only allow 'user' or 'admin' role
    default: 'user'
  },
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)
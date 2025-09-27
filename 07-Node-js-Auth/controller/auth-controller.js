const User = require('../model/user-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registration = async (req, res) => {
  try {
    // extract user information from our request body
    const { username, email, password, role } = req.body;

    // check if the user is already exists in our database;
    const checkExistingUser = await User.findOne({ $or: [{ username }, { email }] })
    if (checkExistingUser) {
      return res.status(400).json({
        success: false,
        message: "user is already exists either with same username or same email please try with a different username or email",
        alreadyExists: true
      })
    }

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create a new user and save it to the database
    const user = new User({
      username,
      email,
      password: hashedPassword,
      role: role || 'user'
    })

    const savedUser = await user.save();

    if (savedUser) {
      res.status(201).json({
        success: true,
        message: "user registered successfully",
        data: {
          username: savedUser.username,
          email: savedUser.email,
          role: savedUser.role
        }
      })
    }
    else {
      res.status(400).json({
        success: false,
        message: "user registration failed,please try again",
        data: null
      })
    }

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong! Please try again.',
      error
    })
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check if the user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "user not found, please register first",
        data: null
      })
    }
    // check if the password is correct
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({
        success: false,
        message: "invalid credentials,please try again",
        data: null
      })
    }

    // create a jwt token

    const accessToken = jwt.sign({
      userId: user._id,
      username: user.username,
      role: user.role
    },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: '1d'
      })

    // Create a copy of the user data without password
    const userData = user.toObject(); // Convert to plain JS object
    delete userData.password; // Remove password field

    // if everything is fine, return the user data
    res.status(200).json({
      success: true,
      message: "user logged in successfully",
      data: userData,
      accessToken
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong! Please try again.',
      error
    })
  }
}

module.exports = { registration, login }
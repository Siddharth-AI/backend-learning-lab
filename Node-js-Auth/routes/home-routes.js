const express = require('express');
const authMiddleware = require('../middleware/auth-middleware');
const router = express.Router();

router.get('/welcome', authMiddleware, (req, res) => {
  const { username, userId, role } = req.userInfo;
  res.status(200).json({
    success: true,
    message: 'welcome to home route',
    user: {
      _id: userId,
      username,
      role
    }
  })
})

module.exports = router;
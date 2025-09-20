const jwt = require('jsonwebtoken');
const authMiddleware = (req, res, next) => {
  // getting the token from header
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  console.log(token);
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access denied. No token provided"
    })
  }
  //decode this token 
  try {
    const decodeTokenInfo = jwt.verify(token, process.env.JWT_SECRET_KEY)
    req.userInfo = decodeTokenInfo;
    next()
  }
  catch (err) {
    return res.status(500).json({
      success: false,
      message: "Access denied. No token provided or token expire"
    })
  }
}

module.exports = authMiddleware;
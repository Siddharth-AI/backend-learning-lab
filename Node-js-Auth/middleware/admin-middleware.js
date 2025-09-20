const adminMiddleware = (req, res, next) => {
  if (req.userInfo.role !== 'admin') {
    return res.status(401).json({
      success: false,
      message: "Access denied. Only admin can access this route"
    })
  }
  next()
}

module.exports = adminMiddleware;
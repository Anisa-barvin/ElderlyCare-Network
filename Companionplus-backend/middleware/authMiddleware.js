// middleware/authMiddleware.js
const { verifyToken } = require('../utils/jwt'); // Adjust import to use require for JS

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).send({ message: 'No token provided' });
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return res.status(401).send({ message: 'Invalid token' });
  }

  req.user = decoded; // Attach user info to the request
  next();
};

module.exports = authMiddleware;

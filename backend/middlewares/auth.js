const jwt = require('jsonwebtoken');
const SECRET_KEY = 'my-secret-key';

const authenticate = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access denied' });
  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (ex) {
    return res.status(400).json({ message: 'Invalid token' });
  }
};

module.exports = authenticate;
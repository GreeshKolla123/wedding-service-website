const express = require('express');
const router = express.Router();
const { User } = require('../models/User');

router.get('/', async (req, res) => {
  const users = await User.findAll();
  res.json(users);
});

router.post('/register', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.create({ email, password });
  res.json(user);
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user) return res.status(401).json({ message: 'Invalid email or password' });
  const isValidPassword = await user.isValidPassword(password);
  if (!isValidPassword) return res.status(401).json({ message: 'Invalid email or password' });
  const token = jwt.sign({ userId: user.id }, SECRET_KEY);
  res.json({ token });
});

module.exports = router;
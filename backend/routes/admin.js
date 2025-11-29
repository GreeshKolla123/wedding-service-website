const express = require('express');
const router = express.Router();
const { Wedding } = require('../models/Wedding');

router.get('/wedding', async (req, res) => {
  const weddings = await Wedding.findAll();
  res.json(weddings);
});

router.post('/wedding', async (req, res) => {
  const { title, date, time, location, dressCode } = req.body;
  const wedding = await Wedding.create({ title, date, time, location, dressCode });
  res.json(wedding);
});

module.exports = router;
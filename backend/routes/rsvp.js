const express = require('express');
const router = express.Router();
const { Rsvp } = require('../models/Rsvp');

router.get('/', async (req, res) => {
  const rsvps = await Rsvp.findAll();
  res.json(rsvps);
});

router.post('/', async (req, res) => {
  const { name, email, numGuests, weddingId } = req.body;
  const rsvp = await Rsvp.create({ name, email, numGuests, weddingId });
  res.json(rsvp);
});

module.exports = router;
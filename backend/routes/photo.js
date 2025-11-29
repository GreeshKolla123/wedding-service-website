const express = require('express');
const router = express.Router();
const { Photo } = require('../models/Photo');

router.get('/', async (req, res) => {
  const photos = await Photo.findAll();
  res.json(photos);
});

router.post('/', async (req, res) => {
  const { url, weddingId } = req.body;
  const photo = await Photo.create({ url, weddingId });
  res.json(photo);
});

module.exports = router;
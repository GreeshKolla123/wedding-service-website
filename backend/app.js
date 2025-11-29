const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Routes
const weddingRoutes = require('./routes/wedding');
const rsvpRoutes = require('./routes/rsvp');
const photoRoutes = require('./routes/photo');
const userRoutes = require('./routes/user');
const adminRoutes = require('./routes/admin');

app.use('/wedding', weddingRoutes);
app.use('/rsvp', rsvpRoutes);
app.use('/photo', photoRoutes);
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);

// Prisma ORM
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// JWT Authentication
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'my-secret-key';

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
require('dotenv').config();
const express = require('express');
const connectToDB = require('./database/db');
const authRoute = require('./routes/auth-routes');
const homeRoute = require('./routes/home-routes');
const adminRoute = require('./routes/admin-routes');
const app = express();

const PORT = process.env.PORT || 5000;

connectToDB();

// Middleware to parse JSON requests
app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/home-page', homeRoute)
app.use('/api/admin-page', adminRoute)

app.listen(PORT, (err) => {
  if (err) console.log('something occured server is not running: ', err)
  console.log('server is running on port no.', PORT)
})
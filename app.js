const express = require('express');
const app = express();


app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

const userRoutes = require('./routes/users');
app.use('/api', userRoutes);

module.exports = app;

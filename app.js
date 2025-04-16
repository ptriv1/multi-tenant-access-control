const express = require('express');
const app = express();


app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

const tenantRoutes = require('./routes/tenants');
app.use('/api/tenants', tenantRoutes);

module.exports = app;

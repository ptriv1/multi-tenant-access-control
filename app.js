const express = require('express');
const app = express();

app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);

const tenantRoutes = require('./routes/tenants');
app.use('/api/tenants', tenantRoutes);

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

module.exports = app;

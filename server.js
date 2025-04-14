const express = require('express')
const app = express()
const port = 3000
const usersRouter = require('./routes/users');
const tenantsRouter = require('./routes/tenants');

app.use('/users', usersRouter);
app.use('/tenants', tenantsRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
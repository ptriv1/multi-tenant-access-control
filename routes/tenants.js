const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Tenants route works!');
});

module.exports = router;

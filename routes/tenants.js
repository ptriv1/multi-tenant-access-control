const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json(['Tenants route works']);
});

module.exports = router;

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json(['Tenants route works']);
});

router.post('/', (req, res) => {
  console.log('POST /api/tenants was hit');
  res.json(['Creates tenant']);
});

module.exports = router;

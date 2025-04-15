const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    console.log("GET /users was hit")
    res.json(['List of users']);
});

module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log("GET /users was hit")
    res.json(['List of users']);
});

router.post('/', (req, res) => {
    console.log("POST /users was hit");
    res.json(['Creates user']);
});

module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/users', (req, res) => {
    res.json(['List of users']);
});

router.post('/users', (req, res) => {
    res.send("Adds user");
});

router.put('/users', (req, res) => {
    res.send("Replaces existing information");
});

router.patch('/users', (req, res) => {
    res.send("Updates email");
});

module.exports = router;
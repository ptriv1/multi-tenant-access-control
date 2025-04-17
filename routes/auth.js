// route /login
// validate user input
// check username and password
// if matching, generate token
// if not, return error
// returns token

const express = require('express');
const router = express.Router();

router.post('/login', (req, res) => {
    console.log("POST /login was hit");
    res.json(['Creates token']);
});

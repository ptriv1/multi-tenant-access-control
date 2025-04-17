const { verifyLogin } = require('./services/authService.js');

const express = require('express');
const router = express.Router();

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const token = await verifyLogin(username, password);
    console.log("POST /login was hit");
    if (token)
        res.status(200).json({ token });
    else
        res.status(401).json({ message: 'Invalid credentials' });
});

module.exports = router;
